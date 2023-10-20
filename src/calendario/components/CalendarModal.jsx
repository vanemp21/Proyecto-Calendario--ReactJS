import { useState } from "react";

import Modal from "react-modal";
import DatePicker, {registerLocale} from "react-datepicker";
import './modal.css';
import { addHours } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es'
registerLocale('es',es);
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',

    },
};
Modal.setAppElement('#root');

export const CalendarModal = () => {
    const [isOpen, setisOpen] = useState(true);

    const [formValues, setFormValues] = useState({
        title: 'Vanessa',
        notes: 'Rubio',
        start: new Date(),
        end: addHours(new Date(), 2),
    })
    const onInputChanged = ({target})=>{
setFormValues({
    ...formValues,
    [target.name]: target.value
})
    }

    const onCloseModal = () => {
        console.log('cerrando modal')
        setisOpen(false)
    }
    const onDateChanged = (event,changing)=>{
        setFormValues({
            ...formValues,
            [changing]:event
        })
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label><br/>
                  <DatePicker
                  selected = {formValues.start}
                  onChange={(event)=>onDateChanged(event,'start')}
                  className="form-control"
                  dateFormat="Pp"
                  showTimeSelect
                  locale="es"
                  timeCaption="Hora"
                  />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <label>Fecha y hora inicio</label><br/>
                  <DatePicker
                  minDate={formValues.start}
                  selected = {formValues.end}
                  onChange={(event)=>onDateChanged(event,'end')}
                  className="form-control"
                  dateFormat="Pp"
                  showTimeSelect
                  locale="es"
                  timeCaption="Hora"
                  />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChanged}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChanged}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
