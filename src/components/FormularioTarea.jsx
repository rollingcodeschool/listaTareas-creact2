import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import ListaTareas from './ListaTareas'
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const {register, handleSubmit,  formState: { errors }} = useForm();

  const posteriorValidacion = (data)=>{
    console.log(data)
  }

    return (
        <section className="mb-4">
          <Form onSubmit={handleSubmit(posteriorValidacion)} className="container d-flex">
            <Form.Group controlId="formTarea" className="w-100">
              <Form.Control type="text" placeholder="Ingrese una tarea" {...register("tarea",{
                required: 'La tarea es un dato obligatorio'
              })}/>
              <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              <PlusCircle></PlusCircle>
            </Button>
          </Form>
          <ListaTareas></ListaTareas>
        </section>
    );
};

export default FormularioTarea;