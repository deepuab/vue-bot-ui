/* eslint-disable no-param-reassign */
// Short hand syntax for updating directives on mount and update
export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

// const applyStyle = (element, binding) => {
//   // // Passing data to custom directive using args and modifiers
//   // if (binding.arg !== 'position') return;
//   // Object.keys(binding.modifiers).forEach((key) => {
//   //   element.style[key] = '5px';
//   // });

//   // // Passing data to custom directive using objects
//   Object.keys(binding.value).forEach((position) => {
//     element.style[position] = binding.value[position];
//   });
//   element.style.position = 'absolute';
// };

// export default {
//   // Changes applied to element only when element is mounted
//   bind: (element, binding) => {
//     applyStyle(element, binding);
//   },
//   // Changes applied to element only when element is updated
//   update: (element, binding) => {
//     applyStyle(element, binding);
//   },

// };
