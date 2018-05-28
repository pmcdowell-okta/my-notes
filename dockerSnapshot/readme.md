### How to take a snapshot in Docker

Once you have your Docker Image setup, and you want to SnapShot it.

Press **CTRL + P**, then **CTRL+Q**

Then run:

`docker ps`

This will show you the Container ID that is running.

Then run:

`docker commit 451d643f8dd0 mybackup`

To restart your images run:

`docker run –it mybackup bash`

If you want to attach your console to an image that is running, you can use

`docker attach 451d643f8dd0`    <-This is the ID of the running container

For example, you can reattach to your running image after you snapshot

To start up your snapshot again, at any time just run it like so

`docker run –it mybackup bash`

