<h2>Motivation</h2>
Play with testing in react

<h2>Test files</h2>

<h3>App.test.js : pure jest test (??) but uses the dom </h3>
<ul>
<li>render the App component and use querySelector on h2 to verify content</li>
<li>use dom api via document to query the dom</li>
<li>use document object and ReactDOM to render</li>
<li>use jest api like expect to test results</li>
<li>its not clear to me : where is document taken from ? because document exist on the browser so how does the jest know this ?? may be this is document from jest-dom</li>
</ul>

<h3>JsonPlaceholder.test.js : testing-library/react</h3>
<ul>
<li>use render from testing-library/react to render JsonPlaceholder component</li>
<li>use testing-library api to render JsonPlaceholder component</li>
<li>use testing-library api e.g findByText to query elements on the dom</li>
<li>use jest-dom api toBeInTheDocument(via testing-library) to check if an item is in the dom</li>
</ul>

<h3>Todos.test.js : more advanced testing-library/react using also esting-library/user-event</h3>
<ul>
<li>use render from testing-library/react to render JsonPlaceholder component</li>
<li>use testing-library api to render Todos component</li>
<li>use fireEvent from @testing-library/react to change values on the dom</li>
<li>use userEvent from @testing-library/user-event to issue events like click on elements</li>
</ul>
