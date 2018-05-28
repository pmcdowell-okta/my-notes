### Okta Keystore for On Premise Agents.

If you are working with Okta On Premise Agent, and using HTTPS, you need to add the Okta Key to the JRE's keystore (or vice a versa), but this is the command you will need to do that.

Only took 3 hours for me to figure that out.

`keytool -keystore cacerts -import -alias localhost -file /okta/server.crt`

Add key to On Prem provisioning JRE

