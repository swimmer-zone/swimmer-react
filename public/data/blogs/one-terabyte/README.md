# One Terabyte

Finally I know what I've worked for, the packages are delivered and my TV proudly stands on my desk, which was kind of weird. While waiting on one store with a 26" TV, another store had a discount on a 32" TV. So now I have a bigger screen for less money.

My HDD's are ready to be built in, it's unbelievable how hard it is to buy a RAID controller, these days, such controllers are built in on main boards, but these are SATA controllers and I have IDE drives (to match those I had already). If there's a controller available anywhere, this is a SCSI controller, which in my case would be useless.

To explain the RAID principle, using RAID5 as an example with images from [Gathering of Tweakers](https://gathering.tweakers.net):

![RAID5](https://sww.tf/images/other/raid5.jpg)

Assuming there are four disks, every disk has three parts with data and the fourth part contains the checksum of that fourth part of the other three disks. If one of the drives fails, the lost data can be retrieved using the rest of the data and this checksum. Also, the data can be accessed faster. To explain that using the image: If you want to read data from drive B, you can also use 1/3 of the capacity of the grey cell on drive A. It's a small improvement of speed, but with the security being the first priority, it's a nice extra feature.

RAID means *Redundant Arrays of Inexpensive Disks*, which means you don't need expensive disks for high security.

Some specs: I had an 80 GB and 320 GB drive and another drive of 40 GB being somewhere in my closet. I ordered three of 320 GB on top of this, which will be 4 minus 1 (because of the parity bits). If I got it right, this will be one virtual drive of 960 GB. That will do for a while I guess.

I assumed there would be RAID controllers somewhere to serve my purposes, but because I have IDE drives, the possibilities are limited, because I had to replace three of the drives with SATA ones. But now I have 4 times 320 GB of available space. I still have to find out how to connect these drives with my main board having only four IDE ports. There are some RAID controllers available, but only RAID0 or RAID1 or a combination. RAID0 is striping, which means the drives are connected sequential, making it one big drive of 640 GB. But when one of these drives fails, all data is lost. RAID1 is mirroring, with two drives, the capacity is 320 GB, but no data is lost when one of those drives fails. This isn't very fast, because all data has to be written twice. RAID10 or RAID01 is a combination of the two.

---

It's working now with a Promise Ultra100 TX2 card, which allows me to connect four drives, leaving a total of 8 IDE ports. I now have 1,26 TB and with another two drives I still can expand to 1,65 TB. I can even buy another card, with another 4 IDE ports. At this point I can start worrying on how to fill all that space.
