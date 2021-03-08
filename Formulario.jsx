import React, { Fragment, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



export default function Formulario() {

    const useStyles = makeStyles((theme) => ({

        root: {
          '& > *': {
            margin: 'auto',
            width: 800,
            marginLeft: 500,
            marginTop: 100,
            padding: 6,
            fontfamily: 'Gill Sans',
            color: 'white',
            background: 'white'
          },
        },
          paper: {
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
        box: {
            width: 8000,
            margintop: 1000,
            padding: 80,
            fontfamily: "'Gill Sans', 'Gill Sans MT', Arial, 'Trebuchet MS', sans-serif",
            color: 'white',
        },
        fondo: {
          background: theme.palette.secondary,
        },
        solo: {
          width: 300,
          marginLeft: 50,
          padding: 10

        },
        completo: {
          width: 650,
          marginLeft: 50,
          padding: 20
        },
        texto: {
          fontFamily: 'Arial',
          color: 'blue',
          marginLeft: 550

        },
        button: {
          margin: theme.spacing(1),
          marginTop: 50,
          marginLeft: 50
        }
      }));

    const classes = useStyles();

    // Tarea, mostrar datos en alert
    const [usuario, setUsuario] = useState({
        Nombre: "",
        Apellido: "",
        Email: "",
        Telefono: "",
        Direccion: "",
        Mensaje: ""
    })

    const handleChange = (e) => {
      const {name, value} = e.target
      setUsuario({ ...usuario, [name]: value})
  }

    useEffect(() => {
      console.log(usuario);
  }, [usuario])

    return (
      <Fragment>
        <div className={classes.root}>
        <h1 className={classes.texto}>Ponte en contacto</h1>
            <form noValidate autoComplete="off">
            <Input onChange={handleChange} name="Nombre" className={classes.solo} placeholder="Nombre" inputProps={{ 'aria-label': 'description' }} />
            <Input onChange={handleChange} name="Apellido" className={classes.solo} placeholder="Apellido" inputProps={{ 'aria-label': 'description' }} />
            <Input onChange={handleChange} name="Email" className={classes.solo} placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
            <Input onChange={handleChange} name="Telefono" className={classes.solo} placeholder="Teléfono" inputProps={{ 'aria-label': 'description' }} />
            <Input onChange={handleChange} name="Direccion" className={classes.completo} placeholder="Dirección" inputProps={{ 'aria-label': 'description' }} />
            <Input onChange={handleChange} name="Mensaje" className={classes.completo} placeholder="Escribe tu mensaje aquí" inputProps={{ 'aria-label': 'description' }} />
            <Button onClick={() => alert(`Registrando datos...\nNombre: ${usuario.Nombre}\nApellido: ${usuario.Apellido}\nCorreo: ${usuario.Email}\nTeléfono: ${usuario.Telefono}\nDirección: ${usuario.Direccion}\nMensaje: ${usuario.Mensaje}`)} color="primary" variant="contained" className={classes.button} endIcon={<Icon>send</Icon>}>
          Enviar
        </Button>
        </form>
      </div>
      </Fragment>
    )
}
