#sudo apt update
#sudo apt upgrade -y

#sudo apt install -y vim
#
#rfkill unblock 0
#rfkill unblock 1


#sudo apt remove -y rfkill

rfkill unblock wifi

nmcli radio wifi on
nmcli con add type wifi ifname wlan0 con-name ap mode ap ssid Photobooth
nmcli con modify ap ipv4.method shared ipv4.addresses 192.168.1.1/24
nmcli con modify ap 802-11-wireless.mode ap 802-11-wireless.band bg
nmcli con modify ap wifi-sec.key-mgmt wpa-psk wifi-sec.psk "photobooth2022"
nmcli con up ap
nmcli con modify ap connection.autoconnect yes

sudo echo "net.ipv4.ip_forward=1" > /etc/sysctl.conf

sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"

sudo echo "iptables-restore < /etc/iptables.ipv4.nat" >  /etc/rc.local

echo "set mouse-=a" >> ~/.vimrc
echo "set mouse-=a"| sudo tee -a /root/.vimrc


for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/raspbian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/raspbian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

cd /home/pi/photobooth/docker
docker build -t dpeters/photobooth_base ./base
chmod a+x ./gphoto/epeg/autogen.sh
docker build -t dpeters/photobooth_gphoto ./gphoto

cd /home/pi/photobooth/
docker compose build


echo "
[Unit]
Description=Docker Photobooth Server Service
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/pi/photobooth
ExecStart=/usr/bin/docker compose up -d
ExecStop=/usr/bin/docker compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
" | tee /etc/systemd/system/photobooth-server.service

sudo systemctl enable photobooth-server

sudo systemctl start photobooth-server

echo ""
echo ""
echo "Die PHOTOBOOTH installation ist abgeschlossen, der PI starten nun in 20 Sekunden neu."
echo "-------------------------"
echo "Wie komm wieder an den PI?"
echo "Per WLAN: Photobooth"
echo "Passwort: Photobooth2022"
echo "IP: 192.168.1.1"
echo "Photobooth Website URL: 192.168.1.1"
echo "-------------------------"
#sleep 20

#sudo init 6

