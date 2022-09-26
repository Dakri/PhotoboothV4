sudo apt update
sudo apt upgrade -y

sudo apt install -y vim

rfkill unblock 0
rfkill unblock 1


sudo apt remove -y rfkill

#ENABLE WLAN
sudo apt install -y dnsmasq hostapd
sudo echo "
      interface wlan0
      static ip_address=192.168.1.1/24
      nohook wpa_supplicant" | sudo tee /etc/dhcpcd.conf

sudo mv /etc/dnsmasq.conf /etc/dnsmasq.bak

sudo echo "
allow-hotplug wlan0
iface wlan0 inet static

auto eth0
allow-hotplug eth0
iface eth0 inet dhcp" | sudo tee -a /etc/network/interfaces

echo "
# DHCP-Server aktiv für WLAN-Interface
interface=wlan0

# DHCP-Server nicht aktiv für bestehendes Netzwerk
no-dhcp-interface=eth0

# IPv4-Adressbereich und Lease-Time
dhcp-range=192.168.1.100,192.168.1.200,255.255.255.0,24h

# DNS
dhcp-option=option:dns-server,192.168.1.1" | sudo tee  /etc/dnsmasq.conf

sudo systemctl restart dhcpcd
sudo systemctl restart dnsmasq
sudo systemctl enable dnsmasq

echo "
#WLAN-Router-Betrieb

#Schnittstelle und Treiber
interface=wlan0
#driver=nl80211

#WLAN-Konfiguration
ssid=Photobooth
channel=1
hw_mode=g
ieee80211n=1
ieee80211d=1
country_code=DE
wmm_enabled=1

#WLAN-Verschlüsselung
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP
wpa_passphrase=photobooth2022
" | sudo tee /etc/hostapd/hostapd.conf

echo "
 RUN_DAEMON=yes
 DAEMON_CONF=\"/etc/hostapd/hostapd.conf\" " | sudo tee -a /etc/default/hostapd

sudo chmod 600 /etc/hostapd/hostapd.conf


sudo systemctl unmask hostapd
sudo systemctl start hostapd
sudo systemctl enable hostapd

sudo echo "net.ipv4.ip_forward=1" > /etc/sysctl.conf

sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"

sudo echo "iptables-restore < /etc/iptables.ipv4.nat" >  /etc/rc.local

echo "set mouse-=a" >> ~/.vimrc
echo "set mouse-=a"| sudo tee -a /root/.vimrc



#INSTALL DOCKER
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
#apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

sudo usermod -aG docker pi

########## BEGIN ##########
sudo sh -eux <<EOF
# Install newuidmap & newgidmap binaries
apt-get install -y uidmap
EOF
########## END ##########


dockerd-rootless-setuptool.sh install

rm -rf get-docker.sh

sudo systemctl enable docker

sudo apt install docker-compose

cd /home/pi/photobooth/docker
docker-compose build

cd /home/pi/photobooth/
docker-compose build

echo "
[Unit]
Description=Docker Photobooth Server Service
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/pi/photobooth
ExecStart=/usr/bin/docker-compose up -d
ExecStop=/usr/bin/docker-compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
" | tee /etc/systemd/system/photobooth-server.service

sudo systemctl enable photobooth-server

sudo systemctl start photobooth-server

echo "Die PHOTOBOOTH installation ist abgeschlossen, der PI starten nun in 20 Sekunden neu."
echo "-------------------------"
echo "Wie komm wieder an den PI?"
echo "Per WLAN: Photobooth"
echo "Passwort: Photobooth2022"
echo "IP: 192.168.1.1"
echo "Photobooth Website URL: 192.168.1.1:3000"
echo "-------------------------"
sleep 20

sudo init 6

