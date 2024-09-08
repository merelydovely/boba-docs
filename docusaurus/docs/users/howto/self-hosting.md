---
sidebar_position: 5
---

# Self-Hosting BobaBoard

## A Warning

The ability to self-host is still new and experimental. We'd love for people to try it out and let us know how it goes, but we currently can't dedicate a lot of engineering resources to helping you if you run into difficulties. Host at your own risk!

## What is self-hosting, again?

Self-hosting means setting up your very own BobaBoard server!

To host something in a way that's accessible to the world, you need a **server** to not only host your files, but also "serve" them to your audience. The network settings, installed programs, and security credentials of a server are collectively called the **server configuration** or server config.

Since defining all the parts of a server configuration can be time consuming, we put together a [pre-made server configuration](https://github.com/BobaBoard/boba-nixos/) you can clone for your own low-maintenance, easily-reproducible BobaBoard server. To make use of our config, you'll need to install [NixOS](https://nixos.org/) on an unconfigured server and make a few tweaks to connect your server to a domain you control instead of to one we control.

To follow these instructions, you will need:
* A GitHub account *(and the knowledge of how to clone a code repository)*
* VSCode *(or equivalent)*
* Basic Terminal skills
* An unconfigured server

So far, there are two examples of self-hosting—one hosted by the BobaBoard organization [here](https://github.com/BobaBoard/selfhost-example), and one created during a livestream [here on Ms Boba's personal account](https://github.com/essential-randomness/boba-test) to simulate an outsider hosting a BobaBoard server from scratch.

In our self-hosting demo livestream, Ms Boba showed the viewer how to install NixOS on a [Hetzner](https://www.hetzner.com/cloud/) VPS (virtual private server). While the instructions provided below assume you're also using Hetzner, it's not required! Other server options include [DigitalOcean](https://www.digitalocean.com/products/droplets/), [Vultr](https://www.vultr.com/), and even your own physical computer in your home (if you don't mind leaving your computer on 100% of the time!)

## Creating a Server

In your Hetzner dashboard, navigate to the "Create a server" screen. You will need to indicate a choice in each of the following categories:
* Server name
* Region *(Up to you!)*
* Image/Operating system *(Our suggestion: Ubuntu)*
* Virtual CPU type *(BobaBoard doesn't need many CPU resources to run, so you can choose to use only a small number of vCPUs with 4 GB ram.)*
* Network address options *(Our suggestion: Both Public IPv4 & Public IPv6.)*
* SSH key(s) *(If you don't already have an OpenSSH key you want to use, [generate one](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).)*
* Cloud configuration *(see below)*

You can skip choosing anything about SSD volumes, firewalls, automatic backups, server placement groups, or labels.

When you get to the Cloud Configuration section, you will need to enter some brief `YAML` configuration instructions. These instructions will tell the new server what to do when it spins up for the first time. The server's first instructions **must** include your public SSH key—without your public SSH key as part of the initial configuration, you won't be able to use your public key to give the server any further instructions, so you'll be locked out and forced to start over.

Copy and paste the following `YAML` data into the Cloud Config field. Then replace everything between the bracketed quotation marks with your public SSH key. 
```
#cloud-config write_files:

- path: /etc/nixos/host.nix
  permissions: '0644'
  content: |{pkgs, ...}:{   
    users.users.root.openssh.authorizedKeys.keys = [“# your public key #”];
  }
```

The `YAML` configuration must also include an instruction to "infect" (overwrite) the contents of your server machine with NixOS. Add the text below to the Cloud Config field. Then compare the infect link below (right after the word "curl") with the link currently visible in the "How do I use it?" section on the [NixOS GitHub page](https://github.com/elitak/nixos-infect). If the link you find on the NixOS GitHub page is different from the one we have here, replace our link with the newer one in your Cloud Config field.
```
runcmd:
- curl https://raw.githubusercontent.com/elitak/nixos-infect/master/nixos-infect | PROVIDER=hetznercloud NIX_CHANNEL=nixos-23.05 bash 2>&1 | tee /tmp/infect.log
```

Then start your server! This is called "spinning up" the server. It will take some time for NixOS to install, so you can work on the next steps of your server config while you wait.

## Writing the Configuration

### Clone selfhost-example

Clone the [selfhost-example](https://github.com/BobaBoard/selfhost-example) repository to the machine you're working on using the following address:
```
git@github.com:BobaBoard/selfhost-example.git
```

### flake.nix

The `flake.nix` file is the backbone of your NixOS server configuration. It inclues directions to additional configuration instructions hosted publically on GitHub. (The nix language is unique, so don't be surprised if some of the syntax is especially unfamiliar.)

### The systems folder

Some of the configuration instructions in our `flake.nix` file expect to find necessary files in specific folders, namely the `systems` folder. Inside the `systems` folder, `flake.nix` expects a folder named after the type of system architecture your new server is running on. If you didn't do anything unusual during your initial server launch, your server is almost certainly running on an x86_64-linux system, so you can keep the `x86_64-linux` folder provided in the repository you just cloned.

Inside the x86_64-linux folder, rename the "boba-example" folder to the name you gave your new server. 

- `systems`
	- `x86_64-linux` *(or whatever type of system you're running)*
		- `boba-example` > `your-server-name`

Lastly, open your `flake.nix` file and replace the words "boba-example" with your server's name. There should be two instances of "boba-example" to replace.

### default.nix

Inside the folder now named after your server, there is a file called `default.nix`.

- `systems`
	- `x86_64-linux` 
		- `your-server-name`
			- `default.nix`

The `default.nix` file includes more specific configuration details of your new server, including:
- which programs will be running
- which network ports will be open
- which administrator can connect to the server

#### The server's public key

You will need to replace the server's public key in the sample file with the public key you used in the `YAML` Cloud Config above.
```
users.users.root.openssh.authorizedKeys.keys = ["# the same public key you used for the Cloud Config #"];
```

#### The first user & their public key

To give an administrator access to edit the server, you will need to define initial login information for that user and add their public key. If the adminstrator is you, you can use the same public key as before, but if you want to give access to a different person, you can use a different public key as long as it is one half of a public-private key pair.

Below is the part of the `default.nix` file that will establish your first user. Change all the parts that say `msboba` to whatever username you want. Then replace the sample public key with that user's public key. You can keep "password" as "password"; the user will have the ability to change it after they log in for the first time.
```
users.users.msboba = {
    isNormalUser = true;

    name = "msboba";
    initialPassword = "password";

    home = "/home/msboba";
    group = "users";
  
    shell = pkgs.zsh;

    # wheel is needed for sudo
    extraGroups = [ "wheel" ];

    openssh.authorizedKeys.keys = [
      "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIE08e9yPCfh8kEp/sUxzF+hJIkOnoPCrjwjUNr3cdt2I"
    ];
  };
```

## Connecting to the new server

The next step requires connecting your new server to the machine with the private key matching the server's public key (the one from the Cloud Config.)


- Copy your server's IP *(from your Hetzner dashboard or whatever server service you're using)*
- Use a terminal interface to navigate to your cloned selfhost-example directory and enter the following command, where "#.###.##.##" is the IP address of your new server:
```
ssh root@#.###.##.##
```
- Confirm your connection to the server by entering the command `hostname`, which should return your server name
- Confirm nix is installed by entering the command `nix`, which should return "no subcommand specified" and suggest a nix subcommand (rather than something like "command not found")

### Getting files from the new server

We need the contents of two files from the server to add to the configuration files we're working on. Use the `cat` command to request the contents of these two files from the NixOS server.

#### Hardware config

- Create a new file in your `your-server-name` folder called `hardware.nix`
- Enter the following command: `cat /etc/nixos/hardware-configuration.nix`
- Copy the returned text into the new file
- Save the file

#### Networking config

- Create a new file in your `your-server-name` folder called `networking.nix`
- Enter the following command: `cat /etc/nixos/networking.nix`
- Copy the returned text into the new file
- Save the file

### Update the remote server config

#### Push local changes

With the hardware and networking config saved to the local config we're working on, we're ready to add, commit, and push our changes to GitHub (or equivalent) with the message `initial system configuration`.

Open a new terminal and make sure it is pointing at your local machine, rather than at your new NixOS server. (You can check using `hostname`.) Next, use `git status` to check that you are on your main branch. Then add, commit, and push your changes. 
```
git add .
git commit -m "initial system configuration"
git push

#### Use the pushed changes

Now switch back to the terminal connected to your new NixOS server. Right now, its config is only that Cloud Config `YAML` you gave it before it launched. You'll rebuild its config using the new config files you just pushed.

First, set this env var to enable flakes if it's not already set:
```
export NIX_CONFIG="experimental-features = nix-command flakes"
```

Next, point your NixOS server at your new config files by swapping `github:bobaboard/selfhost-example#boba-example` for the equivalent address of your own your-server-name folder. (It will probably look like `github:yourgithubusername/selfhost-example#your-server-name`.)
```
nixos-rebuild switch --no-write-lock-file --flake github:bobaboard/selfhost-example#boba-example --show-trace --option tarball-ttl 0 |& nix run nixpkgs#nix-output-monitor
```

Then the system will build based on your configuration. The speed will vary depending on the power of the machine you've selected—it can take a long time on an underpowered machine.

## Working in the server

- Switch to the user you created
- Set up `tailscale`, starting with `sudo tailscale login`
- Make a directory for your programs (`mkdir programs`, for example)
- We're going to do further work on the configuration directly from the server.
- Clone the configuration from GitHub (several ways you could do this, the stream has us setting up GitHub command line access, adding a new SSH key from this machine, etc)
- `cd` into the directory containing the configuration
- If you want to work in VSCode, you can take advantage of the fact that you've set up `tailscale`. You'll need the VSCode Tailscale extension, where you'll set the ssh username and machine address to access the remote host.

## Bobaboard!

You can install Bobaboard on the server the same way you installed other programs. (See example)

Also see example for how to enable and configure the Bobaboard service.

- configure the db
- configure the address
- configure firebase credentials
- configure SSL (certificate and key)

Reload the config. It's a simpler command now since the files are available on the remote machine: 
```
sudo nixos-rebuild switch --flake .#boba-example |& nix run nixpkgs#nix-output-monitor
```
Doing this without all the files in place will fail - so things like the certificates, the firebase creds, etc. There will also be other errors! Read the output!

One thing that needs troubleshooting is a missing directory needed for the boba service to run correctly - it needs a `/var/lib/bobaboard` directory owned by the `bobaboard` user that the service creates.

(Note that roughly around the 2hr mark is a whole bunch of troubleshooting for this stuff)

Someone hosting their own Bobaboard instance will have to have a Firebase account—they may or may not have to do much config. They'll likely need authentication and storage enabled, and that might be enough. This is something we'd need to test out.

Anyway, once you have the key/the SDK config, you'll want to save it at the specified file path from the boba service config.

You can check `curl http://127.0.0.1:4200/realms/slug/uwu` to see if it's working after the database gets seeded.

## Give it an address

DNS, SSL, Certificates

- Go to DNS provider and point the DNS to the server's IP
- Ask The Big Certificate Authority in the Sky for a certificate to enable connecting to our machine using HTTPS at the specified URL
stopped notetaking around 2:28