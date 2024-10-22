import { useForm } from "react-hook-form";
import styles from "./Custom.module.css"
const ReactHookForm = () => {
    const { register, handleSubmit } = useForm();
    console.log(register());
    return (
        <div>
            <form action="" onSubmit={handleSubmit(data => console.log(data))}>
                <input {...register('name',{required:true})} type="text" placeholder="name" className={styles.input} />
                <input {...register('email')} type="text" placeholder="email" className={styles.input} />
                <input type="submit" className={styles.submit} />
            </form>
        </div>
    );
};

export default ReactHookForm;
