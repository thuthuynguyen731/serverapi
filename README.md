# Deploy on EC2

```bash
sudo yum update
sudo yum install git
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 16.13.0
git clone https://github.com/thuthuynguyen731/serverapi
cd serverapi
npm install -g ts-node
npm install -g typescript
npm install -g nodemon
npm install
npm run demo
```