## Maestro

Maestro is a simple and effective Mobile Ui testing framework with experimental support for web as well.

### Installation

##### Installing the cli

Run the following command to install Maestro on Mac OS, Linux or windows(WSL):

```shell
curl -Ls "https://get.maestro.mobile.dev" | bash
```

windows needs additional setUp, pls refer to [windows installation](https://maestro.mobile.dev/getting-started/installing-maestro/windows)

##### Upgrading the cli

```shell
curl -Ls "https://get.maestro.mobile.dev" | bash
```


### Maestro Studio

Maestro studio can be used to discover the commands needed to interact with your app.

Launch the Maestro Studio with the following command from your terminal.

```shell
maestro studio
```

use of maestro studio is simple and straight forward, for more information pls refer to the following section of the [document](https://maestro.mobile.dev/getting-started/maestro-studio)

### Packages

The following are the package names for Android Apps to be used in the launchApp inside a flow:

| Serial | Environment         | Package Name                  |
| ------ | ------------------- | ----------------------------- |
| 1      | Samadhan UAT        | com.stackbox.dev              |
| 2      | Samadhan Production | com.stackbox.hulmaster        |
| 3      | Staging             | com.stackbox.staging          |
| 4      | SB UAT              | com.stackbox.sbstaging        |
| 5      | Production          | com.stackbox.(to be updated)  |
| 6      | PNG UAT             | com.stackbox.pngstaging       |
| 7      | PNG Production      | com.stackbox.pngproduction    |
| 8      | DC UAT              | com.stackbox.dcstaging        |
| 9      | DC Production       | com.stackbox.(to be updated)  |
| 10     | Nestle Production   | com.stackbox.nestleproduction |

### Browser

The following are the package names for Android Apps to be used in the launchApp inside a flow:

| Serial | Environment | Package Name                            |
| ------ | ----------- | --------------------------------------- |
| 1      | web-apps    | https://apps.staging.stackbox.xyz/login |

### Commands

```shell

test a single flow:
```shell
maestro test maestro/warehouseautomation/sign-in-flow.yaml
```

test a single flow with debugLogs and failure screenShots:
```shell
maestro test maestro/warehouseautomation/sign-in-flow.yaml --debug-output maestro/warehouseautomation
```

test full flow(runs all the test inside the folder for the app parallely):
```shell
maestro test maestro/warehouseautomation
```

test full flow with debugLogs and screenShots(runs all the test inside the folder for the app parallely):
```shell
maestro test maestro/warehouseautomation --debug-output maestro/warehouseautomation
```


### References
1. [Maestro Documentation](https://maestro.mobile.dev/)
2. [Maestro Best Practices](https://blog.mobile.dev/maestro-best-practices-structuring-your-test-suite-54ec390c5c82)
3. [Intro to Maestro](https://dev.to/b42/test-your-react-native-app-with-maestro-5bfj)