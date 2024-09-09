export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      {/* heading */}
      <div id="wd-h-tag">
        <h4>Heading Tag</h4>
        Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>

      {/* paragraph */}
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag.
        </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      {/* list */}
      <div id="wd-lists">
        <h4>List Tag</h4>

        {/* 1. ordered */}
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>

        My favorite recipe:
        <ol id="wd-your-favorite-recipe">
          <li>Dice avocado and cucumber. Combine in a bowl.</li>
          <li>Pour honey mustard dressing over the salad.</li>
          <li>Toss to coat and serve.</li>
        </ol>

        {/* 2. unordered */}
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order):
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>

        Your favorite books (in no particular order):
        <ul id="wd-your-books">
          <li>The Great Gatsby</li>
          <li>The Remains of the Day</li>
          <li>The Miracles of the Namiya General Store</li>
        </ul>
      </div>

      {/* table */}
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">	{/* table, border, width */}
          <thead>					{/* table headings */}
            <tr>						{/* table row */}
              <th>Quiz</th>				{/* table heading */}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>					{/* table body */}
            <tr>
              <td>Q1</td>				{/* table data / cell */}
              <td>HTML</td>
              <td>9/19/24</td>
              <td>91</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>9/26/24</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>CSS</td>
              <td>10/3/24</td>
              <td>93</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>JavaScript</td>
              <td>10/10/24</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>A1-A3</td>
              <td>10/17/24</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Redux</td>
              <td>10/31/24</td>
              <td>96</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>Redux</td>
              <td>11/7/24</td>
              <td>97</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>Node.js</td>
              <td>11/14/24</td>
              <td>98</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Node.js</td>
              <td>11/21/24</td>
              <td>99</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>MongoDB</td>
              <td>12/5/24</td>
              <td>100</td>
            </tr>
          </tbody>

          <tfoot>					{/* table footer */}
            <tr>
              <td colSpan={3}>Average</td>	{/* column span */}
              <td>95.5</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* image */}
      <div id="wd-images">
        <h4>Image Tag</h4>

        {/* 1. remotely */}
        Loading an image from the internet:<br />
        <img id="wd-starship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          width="400px" /><br />

        {/* 2. locally */}
        Loading a local image:<br />
        <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
      </div>

      {/* form */}
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">

          {/* 1. text */}
          <h5>Text Fields</h5>

          <label htmlFor="wd-text-fields-username">Username:&nbsp;</label>
          <input id="wd-text-fields-username" placeholder="jdoe" /><br />

          <label htmlFor="wd-text-fields-password">Password:&nbsp;</label>
          <input type="password" id="wd-text-fields-password" value="123@#$asd" /><br />

          <label htmlFor="wd-text-fields-first-name">First name:&nbsp;</label>
          <input type="text" id="wd-text-fields-first-name" title="John" /><br />

          <label htmlFor="wd-text-fields-last-name">Last name:&nbsp;</label>
          <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
            value="Wonderland" title="The last name" />

          {/* 2. textarea */}
          <h5>Text boxes</h5>
          <label>Biography:</label><br />
          <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>

          {/* 3. button */}
          <h5 id="wd-buttons">Buttons</h5>
          <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">Hello World!</button>

          {/* 4. file upload */}
          <h5>File upload</h5>
          <input id="wd-upload" type="file" />

          {/* 5. radio */}
          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label><br />

          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">Comedy</label><br />

          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">Drama</label><br />

          <input type="radio" name="radio-genre" id="wd-radio-scifi" />
          <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">Fantasy</label>

          {/* 6. checkbox */}
          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label><br />

          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label><br />

          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

          {/* 7. dropdown */}
          <h4 id="wd-dropdowns">Dropdowns</h4>

          {/* 7.1 select one */}
          <h5>Select one</h5>
          <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
              Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          {/* 7.2 select many */}
          <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
          <select id="wd-select-many-genre" multiple>
            <option selected value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
              Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          {/* 8. others */}
          <h4>Other HTML field types</h4>

          {/* 8.1 email */}
          <label htmlFor="wd-text-fields-email"> Email: </label>
          <input type="email"
            id="wd-text-fields-email"
            placeholder="jdoe@somewhere.com" /><br />

          {/* 8.2 number */}
          <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
          <input type="number"
            id="wd-text-fields-salary-start"
            placeholder="1000" /><br />

          {/* 8.3 range */}
          <label htmlFor="wd-text-fields-rating"> Rating: </label>
          <input type="range"
            id="wd-text-fields-rating"
            max="5" /><br />

          {/* 8.4 date */}
          <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
          <input type="date"
            id="wd-text-fields-dob"
            placeholder="2000-01-21" />

        </form>
      </div>

      {/* anchor */}
      <h4>Anchor Tag</h4>
      Please&nbsp;
      <a id="wd-lipsum" href="https://www.lipsum.com">click here</a>&nbsp;
      to get dummy text.<br />

      Please&nbsp;
      <a id="wd-lipsum-doc" href="https://www.lipsum.com/feed/html">click here</a>&nbsp;
      to view a sample document.<br />

      Please&nbsp;
      <a id="wd-github" href="https://github.com/tywangq/kanbas-react-web-app" target="">click here</a>&nbsp;
      to visit the GitHub repository.

    </div>
  );
}
