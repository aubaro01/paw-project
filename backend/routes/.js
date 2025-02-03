const DadosExemplo = [
    {
      "nome": "Carlos Silva",
      "especializacao": "Psicologia Clínica",
      "numero": "912345678",
      "email": "carlos.silva@example.com",
      "avaliacao": 4.5,
      "morada": "Rua das Flores, 123",
      "cidade": "Lisboa"
    },
    {
      "nome": "Ana Pereira",
      "especializacao": "Psicologia Organizacional",
      "numero": "913456789",
      "email": "ana.pereira@example.com",
      "avaliacao": 4.8,
      "morada": "Avenida Central, 456",
      "cidade": "Porto"
    },
    {
      "nome": "João Costa",
      "especializacao": "Neuropsicologia",
      "numero": "914567890",
      "email": "joao.costa@example.com",
      "avaliacao": 4.2,
      "morada": "Rua do Sol, 789",
      "cidade": "Coimbra"
    },
    {
      "nome": "Maria Oliveira",
      "especializacao": "Psicologia do Desenvolvimento",
      "numero": "915678901",
      "email": "maria.oliveira@example.com",
      "avaliacao": 4.9,
      "morada": "Travessa da Paz, 321",
      "cidade": "Braga"
    },
    {
      "nome": "Pedro Santos",
      "especializacao": "Psicologia Educacional",
      "numero": "916789012",
      "email": "pedro.santos@example.com",
      "avaliacao": 3.7,
      "morada": "Rua Nova, 654",
      "cidade": "Faro"
    }
  ]; 


Douctor.insertMany(DadosExemplo)
.then(() => {
  console.log('Dados inseridos com sucesso!');
  mongoose.connection.close(); 
})
.catch((err) => {
  console.error('Erro ao inserir dados:', err);
});


  