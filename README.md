> **Status: archived.** A MIDI timeline component built for the Jam Galaxy browser studio. Developed July 2025 to October 2025. Jam Galaxy is no longer active and this code is not maintained. It is published as-is so the work is readable and reusable.

This component is derived from the MIDI-track rendering code in [signal](https://github.com/ryohey/signal) by ryohey, used under the MIT licence.

This application is designed to display midi tracks as segments on the daw workspace. In this regard, it is similar to [wavesurfer.js](https://github.com/katspaugh/wavesurfer.js/). It is based on the code for displaying a midi track in [signal](https://signal.vercel.app)

### Setup

1. In the project root directory, run the following command to install the required dependencies:
   ```sh
   npm install
   ```

### Run alone with HMR
1. Go to ```.\localLauncher```
2. Run ```npm install```
3. Go back to ```midi-segment-painter``` folder
4. Run ```npm start```
5. The application should now be running on [http://localhost:3000/edit](http://localhost:3000/edit).

### Build for library
Run ```npm run build```

After assembly, two folders are formed: ```dist``` and ```build```
The ```build``` folder is required for local development (see scenario 1 in the studio project). In this case, this is where the entry point is located.
The ```dist``` folder is a separate package that is ready to be published in Github Npm Packeges Registry and can replace the original project. It contains a lightweight package.json file and the build results.

It is planned that when pushing to the main branch of this repository, CI will execute the ```npm run build``` command and publish the updated package to the Github Npm Packages Registry. After that, this package can be updated inside the studio using npm.

### Publishing
![publishing](docs/publishing.jpg)
- Manually increment the version inside package.json in the root of the project (trying to publish an existing version will result in an error, resulting in the package not being published).
- Call Github Actions to publish the package manually as shown in the screenshot.

### Usage
In consumer package import function `start` this way:
```
import { start } from "midi-segment-painter";
```

Pass in this function react-root element reference (NOT id!)

The application should start and mount to this element

in webpack configuration of consumer package add:

```js
configureWebpack: {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            "node_modules/midi-segment-painter/dist/midi-segment-painter"
          ),
          to: "midi-segment-painter",
        },
      ],
    }),
  ],
},
```
It makes available the resources required to run the application when the consuming application is running on the host.