import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
} from '@chakra-ui/react';

interface FormValues
{
    title: string;
    content: string;
    category: string;
}

const AddNotePage: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    title: '',
    content: '',
    category: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Тут ви можете використовувати дані з formData для подальшої обробки або відправки на сервер
    console.log(formData);
    // Ваш код для відправки даних на сервер тут
  };

  return (
    <div>
      <h1>Create New Note</h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title:</FormLabel>
          <Input type='text' name="title" value={formData.title} onChange={handleChange} />
          <FormLabel>Note:</FormLabel>
          <Textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder='Here is a sample placeholder'
            size='sm'
          />
          <FormLabel>Category</FormLabel>
          <Select name="category" value={formData.category} onChange={handleChange}>
            <option>Task</option>
            <option>Random thought</option>
            <option>Quote</option>
            <option>Idea</option>
          </Select>
          <Button mt={4} colorScheme='teal' type='submit'>
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export { AddNotePage };
