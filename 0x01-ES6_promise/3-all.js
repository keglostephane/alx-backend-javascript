import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  const responses = [];

  Promise.all(promises)
    .then((results) => {
      responses.push(...results);
      console.log(responses[0].body,
        responses[1].firstName,
        responses[1].lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
