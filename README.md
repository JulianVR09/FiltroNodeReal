# Que hacer para levantar el proyecto

## Primero
```
npm install //Esto hace que las dependencias que se van a utilizar en el proyecto sean instaldas
npx tsc --init //Esto para que se cree el archivo tsconfig.json el cual es la configuracion del typescript que se desea utiluzar, esto es por comodidad.
```
## Segundo
Se tiene que crear el archivo ```nodemon.json``` y dentro poner
```
{
    "watch": [
        "src"
    ],
    "ext": "ts",
    "exec": "ts-node ./src/index.ts"
}
```

### Con esto puedes ya realizar tus carpetas con tu proyecto.