# MaTheX2Java-React: Web Application

This repository hosts the code for the MaTheX2Java web application.

### Development

##### Docker

1. Build the image.

```
docker build --tag mathex2java-frontend .
```

1. Run image to spin-up application in port 8000 (container port is 3000 so port mapping is required through the `--publish`/`p` argument).

```
docker run -d -p 8000:3000 --name mathex2java-container mathex2java-frontend
```
