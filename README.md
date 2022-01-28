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
![image](https://user-images.githubusercontent.com/80727142/151605235-525b4fb2-6099-4cca-b007-4d45f39878f1.png)

### O login caso tenha os dados corretos (username e password), é feito com sucesso e é retornado true, caso a senha ou o username esteja errado, será retornado false, como no exemplo abaixo:

# Login correto:
![image](https://user-images.githubusercontent.com/80727142/151606116-a2e9cf31-c414-41db-b9c9-8031a741ee30.png)

# Login incorreto:
![image](https://user-images.githubusercontent.com/80727142/151606182-2918de19-e7de-4c98-b7ba-25bfadb2e419.png)



