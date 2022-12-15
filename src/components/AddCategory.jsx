import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //sirve para que no se haga un refresh de la pagina
        if(inputValue.trim().length <= 1) return; //aqui retorna el mismo valor o sea no cambia nada         
        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('') //para limpiar nuestra caja de texto
    }

    return ( 
        <form onSubmit={onSubmit }>
            <input type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
     );
}
 
