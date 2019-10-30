# NextJs Server side Rendering

We use nextjs to render our page application on server side application, this is a good practice to google index your page. Because using just xhr request to get data for build your pages dont make your page indexable by google.

## Creating project

```
  yarn init -y
  yarn add next react react-dom
```

> Setting project scripts in `package.json`

```json
{
  "scripts": {
    "dev": "next",
    "start": "next start",
    "build": "next build"
  }
}
```
