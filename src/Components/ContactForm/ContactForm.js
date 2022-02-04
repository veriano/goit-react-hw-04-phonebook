import { useState } from 'react';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.currentTarget;
      
      switch (name) {
        case 'name':
          setName(value);
          break;
        
        case 'number':
          setNumber(value);

        default:
          return;
      }

      const reset = ()=> {
      setName('');
      setNumber('');
          // this.setState({ name: '', number: ''})
      }
   
    
      const handleSubmit = e => {
        e.preventDefault();
    
        this.props.onSubmitHandler(this.state);
        reset();
      }

   
      return (
            <form className={s.Form} onSubmit={handleSubmit}>
            <label>
            <span className={s.Label}> Name </span>
            <input className={s.Input}
            type="text" value={name} 
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
           />
            </label> 
            <label>
            <span className={s.Label}>Number</span>
            <input className={s.Input}
            type="tel" value={ number }
            onChange={ handleChange }
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
             required
            />
            </label>
            <button className={s.Button} type='submit'><b>Add contact</b></button>
            </form>
        )

}
export default ContactForm;