import { Text, View } from 'react-native';
import { useCallback, useState } from 'react';

import { PageView } from '@/components/PageView';
import { CheckBox } from '@/components/Checkbox';
// import Logo from '@/assets/images/logo_colorido.svg';
import { useSession } from '@/contexts/SessionContext';
import DefaultButton from '@/components/DefaultButton';
import { DefaultInput } from '@/components/DefaultInput';
import { styles } from '@/scenes/public/LoginPage/styles';

export function LoginPage() {
  const { login } = useSession();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });

  const clearErrors = useCallback(() => {
    setError('');
    setLoginError('');
  }, []);

  const onChangeEmail = useCallback(
    (email: string) => {
      clearErrors();
      setForm((prev) => ({ ...prev, email }));
    },
    [clearErrors],
  );

  const onChangePassword = useCallback(
    (password: string) => {
      clearErrors();
      setForm((prev) => ({ ...prev, password }));
    },
    [clearErrors],
  );

  // const onSubmit = useCallback(async () => {
  //   if (!isValidEmail(form?.email)) {
  //     setError('Email inválido');
  //     return;
  //   }
  //
  //   setLoading(true);
  //
  //   try {
  //     await login(form?.email, form?.password, rememberMe);
  //   } catch (error) {
  //     let message = 'E-mail e/ou senha inválidos';
  //     if (
  //       error?.response?.data?.exception &&
  //       error?.response?.data?.exception?.includes('Acesso ao aplicativo')
  //     ) {
  //       message = error?.response?.data?.exception;
  //     }
  //
  //     setLoading(false);
  //     setLoginError(message);
  //   }
  // }, [form, login, rememberMe]);

  return (
    <PageView>
      <View style={styles.container}>
        {/*<Logo style={styles.logo} />*/}

        <View style={styles.content}>
          <Text style={styles.title}>Acesse sua conta</Text>

          <DefaultInput
            label="Email"
            value={form?.email}
            onChangeText={onChangeEmail}
            placeholder="Insira seu email"
            errorMessage={error || loginError}
          />

          <DefaultInput
            label="Senha"
            displaySecureIndicator
            value={form?.password}
            errorMessage={loginError}
            placeholder="Insira sua senha"
            onChangeText={onChangePassword}
          />

          <CheckBox isChecked={true} onChange={() => {}} description="Lembrar meus dados" />

          <DefaultButton
            title="Acessar"
            loading={loading}
            // onPress={onSubmit}
            style={{ marginTop: 22 }}
            // disabled={!form?.email || !form?.password}
          />
        </View>
      </View>
    </PageView>
  );
}
