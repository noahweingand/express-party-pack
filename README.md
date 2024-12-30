# Express Party Pack

A production-grade Express template with technologies and patterns I prefer.

## Toolbelt
💪 **Typescript** for build time safety
🪵 **Pino** for logging
💨 **Biome** for *blazing fast* hand-slapping and ez to read files
📝 **OpenAPI** for docs and generated types

## Development
Be sure to install dependencies first with your preferred Node package manager.

### Local Development 
- Add a `.env.local` file for any environment variables
- Run `build` script
- Run `dev` script to run the server. Saving file changes will restart the server with the latest files.

### Type Generation
Leverage types generated from the OpenAPI documentation. Run `docs:gen` script to generate types from documentation for any changes.

### Documentation
Launch the server and navigate to `http://localhost:3000/docs`

### Building & Deploying for Production
TODO: Add Docker and env stuffz

## TODO
- TODOs above
- Environmentalize OpenAPI stuffz
- Observability
- VSCode dotfiles