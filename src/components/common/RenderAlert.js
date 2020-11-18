
import Swal from 'sweetalert2'

function RenderAlert (success, msg) {
    const icon = success ? 'success' : 'error'
    const title = success ? 'Exito!' : 'Error!'
    return Swal.fire({
        icon,
        text: `${msg} `,
        title,
        showConfirmButton: false,
        timer: 2500
    })
}

export default RenderAlert