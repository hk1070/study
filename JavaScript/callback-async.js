
// callback example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'corder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);

        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({
                        name: 'ellie',
                        role: 'admin'
                    });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }

    async getUserWithRole(user, password) {
        // 이때의 this는 class UserStorage
        const User = await this.loginUser(user, password);
        const role = await this.getRoles(user);
        return role;
      }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

/*
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(
        `Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
 */

// async/await 수정
userStorage
.getUserWithRole(id, password)
.catch(console.log)
.then(console.log);