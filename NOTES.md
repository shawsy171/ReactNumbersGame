<!--https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel-->
# Steps used to create this

> brew update
> brew install yarn

> yarn init

> yarn add webpack webpack-dev-server path

> yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev

`yarn start` to run the webpack-dev-server

sudo mkdir -p /var/www/laymanscode.com/public_html
sudo chown -R $USER:$USER /var/www/laymanscode.com/public_html
nano /var/www/laymanscode.com/public_html/index.html
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/laymanscode.com.conf
sudo nano /etc/apache2/sites-available/laymanscode.com.conf

sudo a2ensite laymanscode.com.conf
sudo letsencrypt --apache -d laymanscode.com
https://www.ssllabs.com/ssltest/analyze.html?d=laymanscode.com&latest


http://stackoverflow.com/questions/38440925/react-native-this-setstate-is-not-a-function


http://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti

