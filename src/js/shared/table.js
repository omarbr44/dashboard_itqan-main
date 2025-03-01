class Table extends HTMLElement {
  constructor() {
    super();
    this.rowsPerPage = 10; // Number of rows per page
    this.currentPage = 1; // Current page
    this.filteredRows = []; // Store filtered rows for search
    this.searchQuery = ''; // Store the search query
    this.cursorPosition = 0; // Store the cursor position

  }

  static get observedAttributes() {
    return ['title', 'columns', 'rows', 'img', 'namee', 'role'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'columns' || name === 'rows') {
      this.render();
    }
  }

  render() {
    const columns = this.getAttribute('columns')?.split(',') || [];
    const rows = JSON.parse(this.getAttribute('rows') || []);
    const img = this.getAttribute('img') || '../../src/images/icons/avatar.png';

    // Use filtered rows if available, otherwise use all rows
    const rowsToDisplay = this.filteredRows.length > 0 ? this.filteredRows : rows;
    /* const rowsToDisplay = this.filteredRows.length */
    
    // Calculate total pages
    const totalPages = Math.ceil(rows.length / this.rowsPerPage);

  // Get rows for the current page
  const startIndex = (this.currentPage - 1) * this.rowsPerPage;
  const endIndex = startIndex + this.rowsPerPage;
  const currentRows = rowsToDisplay.slice(startIndex, endIndex);

 

  this.innerHTML = `
  <div class="relative py-5 overflow-x-auto shadow-md sm:rounded-lg">
    <!-- Add  -->
    <div class="relative overflow-x-auto sm:rounded-lg">
      <div class="flex items-center justify-between flex-column mb-3 p-5 flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          <h3 class="font-bold text-[20px]">${this.getAttribute('title')}</h3>
        </div>
        <div class="flex gap-x-2">
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="table-search-users" value="${this.searchQuery}" class="block p-[10px] px-[14px] ps-10 text-sm text-gray-900 border border-[#EBEBEC] rounded-lg w-80 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-0 focus:border-[#EBEBEC]" placeholder="بحث"/>
          </div>
        </div>
      </div>
      <table id="table" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            ${columns.map((column) => `<th scope="col" class="px-6 py-3 font-semibold">${column}</th>`).join('')}
            <th scope="col" class="px-6 py-3 font-semibold">الاجراءات</th>
          </tr>
        </thead>
        <tbody>
          ${currentRows
            .map(
              (row, index) => `
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              ${Object.values(row)
                .map(
                  (cell) => `
                <td class="px-6 py-4">
                  ${row?.name === cell
                    ? `
                      <div class="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="${img}" alt="Jese image"/>
                        <div class="ps-3">
                          <div class="text-[16px] font-semibold">${cell}</div>
                        </div>
                      </div>
                    `
                    : cell}
                </td>
              `
                )
                .join('')}
              <td class="px-6 py-4 text-[#475467]">
                <div>
                  <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction${index}" class="dropdownActionButton inline-flex items-center" type="button">
                    <span class="sr-only">Action button</span>
                    <svg class="cursor-pointer" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.48828 17.6115C9.48828 18.6126 10.3074 19.4316 11.3085 19.4316C12.3096 19.4316 13.1286 18.6126 13.1286 17.6115C13.1286 16.6104 12.3096 15.7913 11.3085 15.7913C10.3074 15.7913 9.48828 16.6104 9.48828 17.6115Z" stroke="#292D32" stroke-width="1.63816"/>
                      <path d="M9.48828 4.87123C9.48828 5.87233 10.3074 6.69141 11.3085 6.69141C12.3096 6.69141 13.1286 5.87233 13.1286 4.87123C13.1286 3.87013 12.3096 3.05106 11.3085 3.05106C10.3074 3.05106 9.48828 3.87013 9.48828 4.87123Z" stroke="#292D32" stroke-width="1.63816"/>
                      <path d="M9.48828 11.2404C9.48828 12.2415 10.3074 13.0605 11.3085 13.0605C12.3096 13.0605 13.1286 12.2415 13.1286 11.2404C13.1286 10.2393 12.3096 9.4202 11.3085 9.4202C10.3074 9.4202 9.48828 10.2393 9.48828 11.2404Z" stroke="#292D32" stroke-width="1.63816"/>
                    </svg>
                  </button>
                  <!-- Dropdown menu -->
                  <div id="dropdownAction${index}" class="dropdownAction z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute left-0">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                      <li data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.168 2.5009C14.3868 2.28203 14.6467 2.10842 14.9326 1.98996C15.2186 1.87151 15.5251 1.81055 15.8346 1.81055C16.1442 1.81055 16.4507 1.87151 16.7366 1.98996C17.0226 2.10842 17.2824 2.28203 17.5013 2.5009C17.7202 2.71977 17.8938 2.97961 18.0122 3.26558C18.1307 3.55154 18.1917 3.85804 18.1917 4.16757C18.1917 4.4771 18.1307 4.7836 18.0122 5.06956C17.8938 5.35553 17.7202 5.61537 17.5013 5.83424L6.2513 17.0842L1.66797 18.3342L2.91797 13.7509L14.168 2.5009Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <a href="#" class="block">تعديل البيانات</a>
                      </li>
                      <li data-modal-target="popup-modal2" data-modal-toggle="popup-modal2" class="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.9987 10.2077C7.58715 10.2077 5.6237 8.24423 5.6237 5.83268C5.6237 3.42113 7.58715 1.45768 9.9987 1.45768C12.4102 1.45768 14.3737 3.42113 14.3737 5.83268C14.3737 8.24423 12.4102 10.2077 9.9987 10.2077ZM9.9987 1.87435C7.81858 1.87435 6.04036 3.65256 6.04036 5.83268C6.04036 8.0128 7.81858 9.79102 9.9987 9.79102C12.1788 9.79102 13.957 8.0128 13.957 5.83268C13.957 3.65256 12.1788 1.87435 9.9987 1.87435Z" fill="#10B981" stroke="#10B981" stroke-width="0.833333"/>
                          <path d="M12.3559 12.6095L12.3583 12.6101C12.467 12.64 12.5317 12.7504 12.5003 12.8645C12.4705 12.9731 12.3605 13.0377 12.2466 13.0068C11.5239 12.8042 10.7696 12.7083 10.0021 12.7083C6.2653 12.7083 3.05208 15.1448 3.05208 18.3333C3.05208 18.4449 2.9553 18.5417 2.84375 18.5417C2.7322 18.5417 2.63542 18.4449 2.63542 18.3333C2.63542 15.0744 5.86449 12.2917 10.0021 12.2917C10.8077 12.2917 11.5946 12.3953 12.3559 12.6095Z" fill="#10B981" stroke="#10B981" stroke-width="0.833333"/>
                          <path d="M15.0013 18.9577C13.618 18.9577 12.318 18.2244 11.618 17.0327C11.243 16.4327 11.043 15.7243 11.043 14.9993C11.043 13.7827 11.5846 12.6577 12.5263 11.9077C13.2263 11.3493 14.1096 11.041 15.0013 11.041C17.1846 11.041 18.9596 12.816 18.9596 14.9993C18.9596 15.7243 18.7596 16.4327 18.3846 17.041C18.1763 17.391 17.9096 17.7077 17.593 17.9744C16.9013 18.6077 15.9763 18.9577 15.0013 18.9577ZM15.0013 12.291C14.2596 12.291 13.5763 12.5827 13.0596 13.1077C12.568 13.616 12.293 14.2827 12.293 14.9993C12.293 15.491 12.4263 15.9743 12.6846 16.391C12.818 16.6243 12.993 16.8327 13.193 17.0077C13.693 17.466 14.3346 17.716 15.0013 17.716C15.943 17.716 16.8346 17.216 17.318 16.4077C17.4596 16.1744 17.568 15.9077 17.6263 15.6494C17.6846 15.4327 17.7096 15.2244 17.7096 15.0077C17.7096 14.341 17.4596 13.6994 17.0096 13.1994C16.5096 12.616 15.7763 12.291 15.0013 12.291Z" fill="#10B981"/>
                          <path d="M14.0995 16.5004C13.9411 16.5004 13.7828 16.4421 13.6578 16.3171C13.4161 16.0754 13.4161 15.6754 13.6578 15.4338L15.4161 13.6754C15.6578 13.4337 16.0578 13.4337 16.2995 13.6754C16.5411 13.9171 16.5411 14.3171 16.2995 14.5587L14.5411 16.3171C14.4161 16.4421 14.2578 16.5004 14.0995 16.5004Z" fill="#10B981"/>
                          <path d="M15.8851 16.516C15.7268 16.516 15.5685 16.4577 15.4435 16.3327L13.6852 14.5743C13.4435 14.3327 13.4435 13.9327 13.6852 13.691C13.9268 13.4493 14.3268 13.4493 14.5685 13.691L16.3268 15.4493C16.5685 15.691 16.5685 16.091 16.3268 16.3327C16.2018 16.4577 16.0435 16.516 15.8851 16.516Z" fill="#10B981"/>
                        </svg>
                        <a href="#" class="block text-[#10B981]">تنشيط المستخدم</a>
                      </li>
                 <li data-modal-target="popup-modal3" data-modal-toggle="popup-modal3" class="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.9987 10.2077C7.58715 10.2077 5.6237 8.24423 5.6237 5.83268C5.6237 3.42113 7.58715 1.45768 9.9987 1.45768C12.4102 1.45768 14.3737 3.42113 14.3737 5.83268C14.3737 8.24423 12.4102 10.2077 9.9987 10.2077ZM9.9987 1.87435C7.81858 1.87435 6.04036 3.65256 6.04036 5.83268C6.04036 8.0128 7.81858 9.79102 9.9987 9.79102C12.1788 9.79102 13.957 8.0128 13.957 5.83268C13.957 3.65256 12.1788 1.87435 9.9987 1.87435Z" fill="#E92727" stroke="#E92727" stroke-width="0.833333"/>
                            <path d="M12.3559 12.6095L12.3583 12.6101C12.467 12.64 12.5317 12.7504 12.5003 12.8645C12.4705 12.9731 12.3605 13.0377 12.2466 13.0068C11.5239 12.8042 10.7696 12.7083 10.0021 12.7083C6.2653 12.7083 3.05208 15.1448 3.05208 18.3333C3.05208 18.4449 2.9553 18.5417 2.84375 18.5417C2.7322 18.5417 2.63542 18.4449 2.63542 18.3333C2.63542 15.0744 5.86449 12.2917 10.0021 12.2917C10.8077 12.2917 11.5946 12.3953 12.3559 12.6095Z" fill="#E92727" stroke="#E92727" stroke-width="0.833333"/>
                            <path d="M15.0013 18.9577C14.018 18.9577 13.0846 18.591 12.3596 17.9327C12.068 17.6827 11.8096 17.3744 11.6096 17.0327C11.243 16.4327 11.043 15.7243 11.043 14.9993C11.043 13.9577 11.443 12.9827 12.1596 12.241C12.9096 11.466 13.918 11.041 15.0013 11.041C16.1346 11.041 17.2096 11.5244 17.943 12.3577C18.593 13.0827 18.9596 14.016 18.9596 14.9993C18.9596 15.316 18.918 15.6327 18.8346 15.9327C18.7513 16.3077 18.593 16.6994 18.3763 17.041C17.6846 18.2244 16.3846 18.9577 15.0013 18.9577ZM15.0013 12.291C14.2596 12.291 13.5763 12.5827 13.0596 13.1077C12.568 13.616 12.293 14.2827 12.293 14.9993C12.293 15.491 12.4263 15.9743 12.6846 16.391C12.818 16.6243 12.993 16.8327 13.193 17.0077C13.693 17.466 14.3346 17.716 15.0013 17.716C15.943 17.716 16.8346 17.216 17.318 16.4077C17.4596 16.1744 17.568 15.9077 17.6263 15.6494C17.6846 15.4327 17.7096 15.2244 17.7096 15.0077C17.7096 14.341 17.4596 13.6994 17.0096 13.1994C16.5096 12.616 15.7763 12.291 15.0013 12.291Z" fill="#E92727"/>
                            <path d="M14.0995 16.5004C13.9411 16.5004 13.7828 16.4421 13.6578 16.3171C13.4161 16.0754 13.4161 15.6754 13.6578 15.4338L15.4161 13.6754C15.6578 13.4337 16.0578 13.4337 16.2995 13.6754C16.5411 13.9171 16.5411 14.3171 16.2995 14.5587L14.5411 16.3171C14.4161 16.4421 14.2578 16.5004 14.0995 16.5004Z" fill="#E92727"/>
                            <path d="M15.8851 16.516C15.7268 16.516 15.5685 16.4577 15.4435 16.3327L13.6852 14.5743C13.4435 14.3327 13.4435 13.9327 13.6852 13.691C13.9268 13.4493 14.3268 13.4493 14.5685 13.691L16.3268 15.4493C16.5685 15.691 16.5685 16.091 16.3268 16.3327C16.2018 16.4577 16.0435 16.516 15.8851 16.516Z" fill="#E92727"/>
                          </svg>
                          <a href="#" class="block text-[#E92727]">حذف المستخدم</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>

        <!-- Pagination -->
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 p-4 mt-5" aria-label="Table navigation">
          <button 
            class="border text-[14px] flex gap-x-3 justify-center items-center rounded-[8.5px] button-shadow border-[#D0D5DD] py-[9px] px-[16px]"
            data-action="previous"
            ${this.currentPage === 1 ? 'disabled' : ''}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.21094 7.68702H13.9522M13.9522 7.68702L7.58155 1.31641M13.9522 7.68702L7.58155 14.0576" stroke="#344054" stroke-width="1.82382" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            السابق
          </button>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            ${Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => `
              <li>
                <a 
                  href="#"
                  class="flex items-center rounded-[9px] justify-center px-3 h-8 leading-tight text-[14px] ${
                    page === this.currentPage
                      ? 'bg-[#EBF2FF] text-[#377DFF]'
                      : 'text-[#667085]'
                  }"
                  data-action="change"
                  data-page="${page}"
                >
                  ${page}
                </a>
              </li>
            `
            ).join('')}
          </ul>
          <button 
            class="border text-[14px] flex gap-x-3 justify-center items-center rounded-[8.5px] button-shadow border-[#D0D5DD] py-[9px] px-[16px]"
            data-action="next"
            ${this.currentPage === totalPages ? 'disabled' : ''}
          >
            التالى
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.792 7.68702H1.05078M1.05078 7.68702L7.42139 14.0576M1.05078 7.68702L7.42139 1.31641" stroke="#344054" stroke-width="1.82382" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  `;

    this.addPaginationListeners();
    // Initialize dropdowns and modals (if needed)
    this.initializeDropdowns();
    
    this.addSearchListener();
  }

  addPaginationListeners() {
    // Add event listener for "Previous" button
    const previousButton = this.querySelector('[data-action="previous"]');
    if (previousButton) {
      previousButton.addEventListener('click', () => this.previousPage());
    }
  
    // Add event listener for "Next" button
    const nextButton = this.querySelector('[data-action="next"]');
    if (nextButton) {
      nextButton.addEventListener('click', () => this.nextPage());
    }
  
    // Add event listeners for page number buttons
    const pageButtons = this.querySelectorAll('[data-action="change"]');
    pageButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const page = parseInt(button.getAttribute('data-page'), 10);
        this.changePage(page);
      });
    });
  }

  search(query) {
    this.searchQuery = query; // Store the search query
    const rows = JSON.parse(this.getAttribute('rows') || []);
    this.filteredRows = rows.filter((row) =>
      row.name.toLowerCase().includes(query.toLowerCase())
    );
    this.currentPage = 1; // Reset to the first page after search
    this.render();
  }


  // Pagination methods
  changePage(page) {
    this.currentPage = page;
    this.render(); // Re-render the table with the new page
  }

  nextPage() {
    const totalPages = Math.ceil(JSON.parse(this.getAttribute('rows')).length / this.rowsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.render(); // Re-render the table with the next page
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.render(); // Re-render the table with the previous page
    }
  }

  addSearchListener() {
    const searchInput = this.querySelector('#table-search-users');
    searchInput.focus()
    searchInput.setSelectionRange(this.cursorPosition, this.cursorPosition);
    /* searchInput.setSelectionRange(2,2) */
    if (searchInput) {
      searchInput.addEventListener('input', (event) => {
        this.cursorPosition = event.target.selectionStart;
        const query = event.target.value;
        this.search(query);
      });
    }
  }

  initializeDropdowns() {
    // Initialize dropdowns using Flowbite or your preferred library
    const dropdownButtons = this.querySelectorAll('[data-dropdown-toggle]');

    dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dropdownId = button.getAttribute('data-dropdown-toggle');
      const dropdown = this.querySelector(`#${dropdownId}`);

      // Hide all other dropdowns
      this.querySelectorAll('.dropdownActionButton').forEach((otherDropdown) => {
        if (otherDropdown.getAttribute('data-dropdown-toggle') !== dropdownId) {
          this.querySelector(`#${otherDropdown.getAttribute('data-dropdown-toggle')}`).classList.add('hidden');
        }
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle('hidden');
    });
  });
  
  }
}

customElements.define('table-builder', Table);