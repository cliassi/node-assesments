class Controller {
  static async getUser(context) {
    console.log(context)
    return {
      name: 'John Doe',
      role: 'admin',
      actions: ['profile', 'settings'],
    };
  }
}

module.exports = Controller;
