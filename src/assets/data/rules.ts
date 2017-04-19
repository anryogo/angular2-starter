export const RULES = {
  username: {
    validator: {
      required: 'Name is required'
    }
  },
  email: {
    regexp: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
    validator: {
      required: 'Email is required',
      pattern: 'Please enter a valid email address'
    }
  },
  phone: {
    regexp: '^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$',
    validator: {
      required: 'Phone is required',
      pattern: 'Please enter a valid phone number'
    }
  },
  message: {
    validator: {
      required: 'Message is required'
    }
  }
};
