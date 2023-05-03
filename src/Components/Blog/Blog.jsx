import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>What is the differences between uncontrolled and controlled components?</h2>
            <p>A controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.</p>
            <h2>How to validate React props using PropTypes?</h2>
            <p>1.First, you need to import PropTypes from the 'prop-types' library:<br></br>
               import PropTypes from 'prop-types';<br></br>
               2.Then, you need to define the propTypes object inside your component:<br></br>
               3.For example , if we  define the propTypes for four props: prop1, prop2, prop3, and prop4. The isRequired property is used to specify that the prop is required.<br></br>
               4.The arrayOf and shape validators allow you to validate arrays and objects respectively, and you can specify the types and shape of the items in the array or object.<br></br>
               5.Finally, you can pass the props to the component as usual, and PropTypes will validate them for you 
            </p>
            <h2>What is the difference between nodejs and express js?</h2>
            <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
            <h2>What is a custom hook, and why will you create a custom hook?</h2>
            <p>In React, a custom hook is a reusable function that allows you to extract and reuse logic that can be shared between multiple components. Custom hooks enable you to write reusable code that encapsulates stateful logic, such as fetching data, handling events, or managing component state.
             The primary motivation for creating a custom hook is code reuse. By encapsulating logic in a custom hook, you can make it easier to share code between different components or projects. Additionally, custom hooks can help to keep your code organized and easier to maintain by reducing the complexity of your components.For example, let's say you have multiple components that need to fetch data from a server using fetch(). Rather than duplicating the logic for making API calls in each component, you can create a custom hook that encapsulates that logic, and then use that hook in each component. This not only saves time but also makes it easier to maintain and update the logic in one place.</p>
        </div>
    );
};

export default Blog;