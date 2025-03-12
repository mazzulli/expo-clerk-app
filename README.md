# Welcome to your Expo app 👋

Link: https://www.youtube.com/watch?v=6zcG72N4axU

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Application

Esta aplicação foi para testar a integração e uso do Clerk para autenticação segura.
Ela verifica se o usuário já está logado ou possui uma sessão aberta e direciona para a pagina principal.
Caso não tenha uma sessão aberta, é direcionado para tela de login, onde ele pode entrar com email e senha e efetuar o login, ou ele pode cadastrar uma nova conta.
Uma vez logado na aplicação é possível acessar a página do perfil para inclusão do nome e sobre nome.
Lembrando que para que estas informações possam ser atualizadas é necessário que estejam configuradas e liberadas no painel de configurações do Clerk.

A aplicação se resume nos seguintes recursos:

- Tela de Login
- Tela Cadastro
- Tela de Perfil

![Image](https://github.com/user-attachments/assets/a0fd4fd9-1791-4720-9753-261f1e11fcde)

![Image](https://github.com/user-attachments/assets/47940713-fbb4-4e8f-8445-d9df5adefe03)

![Image](https://github.com/user-attachments/assets/584e3768-1915-4fa2-a127-f79683478f15)
