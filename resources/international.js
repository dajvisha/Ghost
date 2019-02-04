var language = 'es';

var labels = {
    'es': {
        login_form: {
            title_label: 'INICIAR',
            email_label: 'Correo electrónico',
            password_label: 'Contraseña',
            login_button: 'Entrar',
            login_error: 'Correo electrónico o contraseña incorrectos',
        },
        register_form: {
            title_label: 'REGISTRAR',
            username_label: 'Usuario',
            email_label: 'Correo electrónico',
            password_label: 'Contraseña',
            confirm_password_label: 'Confirmar contraseña',
            register_button: 'Registrar',
            username_empty_error: 'El usuario no puede ir en blanco',
            email_invalid_error: 'Ingresa un correo electrónico valido',
            pass_length_error: 'La contraseña debe contener entre 8 y 10 caracteres',
            pass_match_error: 'Las contraseñas no coinciden',
        }
    }
};

module.exports.language = language;
module.exports.labels = labels;
