export const formInputList = [
  {
    type: 1, // Text input
    data: {
      id: 'textInput',
      labelName: 'Text Input',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  },
  {
    type: 2, // Password Input
    data: {
      id: 'passwordInput',
      labelName: 'Password Input',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  },
  {
    type: 3, // Search input
    data: {
      id: 'searchInput',
      labelName: 'Search Input',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  },
  {
    type: 4, // Prepended Text
    data: {
      id: 'prependedText',
      labelName: 'Prepended Text',
      prependText: 'prepend',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  },
  {
    type: 5, // Appended Text
    data: {
      id: 'appendedText',
      labelName: 'Appended Text',
      appendedText: 'append',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  },
  {
    type: 6, // Prepended Checkbox
    data: {
      id: 'prependedCheckbox',
      labelName: 'Prepended Checkbox',
      prependText: 'prepend',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  },
  {
    type: 7, // Appended Checkbox
    data: {
      id: 'appendedCheckbox',
      labelName: 'Appended Checkbox',
      prependText: 'append',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  },
  {
    type: 8, // Button Dropdown
    data: {
      id: 'buttonDropdown',
      labelName: 'Button Dropdown',
      appendedText: 'Action',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  },
  {
    type: 9, // Text Area
    data: {
      id: 'text_Area',
      labelName: 'Text Area',
      prependText: 'append',
      placeholder: 'placeholder',
      helpText: 'help',
      isRequire: false,
      size: 'col-md-6'
    }
  }
]

// Button type has type from 21 - 30
export const buttonList = [
  {
    type: 21, // File Button
    data: {
      id: 'fileButton',
      labelName: 'File Button'
    }
  },
  {
    type: 22, // Single Button
    data: {
      id: 'singleButton',
      labelName: 'Single Button',
      buttonText: 'Button',
      buttonType: 'btn-primary'
    }
  },
  {
    type: 23, // Single Button
    data: {
      id: 'doubleButtonGood',
      labelName: 'Double Button',
      buttonText: 'Good Button',
      buttonType: 'btn-success'
    }
  }
]
// Select type has type from 31 - 40
export const selectList = [
  {
    type: 31, // select Basic
    data: {
      id: 'selectBasic',
      labelName: 'Select Basic',
      selectText: 'option one'
    }
  },
  {
    type: 32, // Select Multiple
    data: {
      id: 'selectMultiple',
      labelName: 'Select Multiple',
      selectText: ['option one','option two'],        
      buttonType: 'btn-primary'
    }
  }
]
// Radio_Check type has type from 41 - 50
export const radio_checkboxList = [
  {
    type: 41, // multiple Radio
    data: {
      id: 'multipleRadio1',
      labelName: 'Multiple Radio'
      // radioText: 'option one'
    }
  },
  // {
  //   type: 41, // multiple Radio
  //   data: {
  //     id: 'multipleRadio2',
  //     labelName: 'Multiple Radio',
  //     radioText: 'option two'
  //   }
  // },
  {
    type: 42, // inline Radio
    data: {
      id: 'inlineRadio',
      labelName: 'Inline Radio',
      radioText: 'option one'
    }
  },
  {
    type: 43, // mulitple Checkbox
    data: {
      id: 'multipleCheckbox',
      labelName: 'Multiple Checkbox',
      radioText: 'option one'
    }
  },
  {
    type: 44, // inline Checkbox
    data: {
      id: 'inlineCheckbox',
      labelName: 'Inline Checkbox',
      radioText: 'option one'
    }
  }
]

