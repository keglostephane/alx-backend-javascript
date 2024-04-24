import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then((resp) => {
      console.log(`${resp[0].body} ${resp[1].firstName} `
                        + `${resp[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
