# Keener.io

#### O que foi utilizado:

```
node, nodemon, sequelize, express, mysql
```

### Para iniciar o programa, primeiro abra na pasta backend
```
cd backend
```

### Após isso, inicie o nodemon com o comando
```
yarn dev
```

### ```PARA RODAR JUNTO AO BANCO MYSQL É NECESSARIO CRIAR A TABELA projeto ```


### A aplicação foi testada no Insomnia, então irei demonstrar com imagens como foi feita tais procedimentos
### Para o cadastro foi feito o "username" e o "password", quando é cadastrado, o usuario recebe o "success: true", caso nao for valido, o valor é false
### O cadastro tambem mostra quando foi criado e atualizado, a data e horario
# Cadastro de usuario
![image](https://user-images.githubusercontent.com/80727142/151605235-525b4fb2-6099-4cca-b007-4d45f39878f1.png)

### O login caso tenha os dados corretos (username e password), é feito com sucesso e é retornado true, caso a senha ou o username esteja errado, será retornado false, como no exemplo abaixo:

# Login correto:
![image](https://user-images.githubusercontent.com/80727142/151606116-a2e9cf31-c414-41db-b9c9-8031a741ee30.png)

# Login incorreto:
![image](https://user-images.githubusercontent.com/80727142/151606182-2918de19-e7de-4c98-b7ba-25bfadb2e419.png)

### A listagem de produto nao tem nenhum segredo, é apenas dar send no insomnia que ja retorna os resultados, e tambem funciona se colocar na url no navegador (ja que o navegador retorna os gets sem problemas)

# Listagem de Usuarios: 
![image](https://user-images.githubusercontent.com/80727142/151606459-f4fbdaf3-0057-4e0f-a044-2fce0b3b0ab7.png)

### Agora temos o delete que pelo id é encontrado o usuario e deletado do banco de dados, pode-se observar pela URL, que para deletar o id é necessario

# Deletar usuarios:
![image](https://user-images.githubusercontent.com/80727142/151606632-346c1d9d-979c-4e4d-bfc7-6201aeb12f82.png)

# Lista de usuario apos o delete: 
![image](https://user-images.githubusercontent.com/80727142/151606704-17e6bcb0-cfa2-4ea6-81be-7742624b8087.png)

### E por fim o Update, Atualizar o usuario, caso voce deseja atualizar apenas o username e nao o password, é so deixar o password como está, e mudar o username, e assim vice e versa...
### O update tambem é pego pelo id do usuario

# Atualizar usuario:
![image](https://user-images.githubusercontent.com/80727142/151606999-9bf6874f-750a-481b-bcc1-ecdf363ebc0d.png)

# Listar usuario apos a atualização: 
![image](https://user-images.githubusercontent.com/80727142/151607061-20c14ad3-9c25-4d86-92d6-d6281c2b7506.png)

## Todas essas funções serve tambem para o produto, que no banco de dados possui o nome products
## Então não é algo diferente do convencional entre usuario e produtos

# No banco de dados as tables estão da seguinte forma:
![image](https://user-images.githubusercontent.com/80727142/151607372-d1768923-eb6b-4cf4-b70a-e09d26dc1dc7.png)
![image](https://user-images.githubusercontent.com/80727142/151607408-d1251fa0-9127-43a8-87b8-83d5c7e1896a.png)


### EEEE se voce leu até aqui, obrigado pela atenção!




