import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { CUTableForm } from "./dialog/CU-form";

export class Table extends LitElement {
  static properties = {
    columns: { type: [String] },
    rows: { type: [String] },
    img: { type: String },
    title: { type: String },
    printer: { type: Boolean },
    addTitle: { type: String },
    addItem: { type: Function },
    filter: { type: String },
    addHref:{type:String}
  };

  createRenderRoot() {
    return this;
  }

  render() {
    let withFilter = this.filter && html`${unsafeHTML(this.filter)}`;
    let withAdd =
      this.addTitle &&
      CUTableForm({
        buttonTitle: this.addTitle,
        headTitle: this.addTitle,
        addHref:this.addHref
      });
    let withPrinter =
      this.printer &&
      html`
        <div class="flex gap-x-1">
          <div
            class="border border-[#EBEBEC] p-[10px] rounded-[8px] cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 5C7 3.34 8.34 2 10 2H14C15.66 2 17 3.34 17 5C17 5.55 16.55 6 16 6H8C7.45 6 7 5.55 7 5Z"
                fill="#377DFF"
              />
              <path
                d="M17.75 15C17.75 15.41 17.41 15.75 17 15.75H16V19C16 20.66 14.66 22 13 22H11C9.34 22 8 20.66 8 19V15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H17C17.41 14.25 17.75 14.59 17.75 15Z"
                fill="#377DFF"
              />
              <path
                d="M18 7H6C4 7 3 8 3 10V15C3 17 4 18 6 18H6.375C6.72018 18 7 17.7202 7 17.375C7 17.0298 6.71131 16.7604 6.38841 16.6384C5.72619 16.3882 5.25 15.7453 5.25 15C5.25 14.04 6.04 13.25 7 13.25H17C17.96 13.25 18.75 14.04 18.75 15C18.75 15.7453 18.2738 16.3882 17.6116 16.6384C17.2887 16.7604 17 17.0298 17 17.375C17 17.7202 17.2798 18 17.625 18H18C20 18 21 17 21 15V10C21 8 20 7 18 7ZM10 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H10C10.41 10.25 10.75 10.59 10.75 11C10.75 11.41 10.41 11.75 10 11.75Z"
                fill="#377DFF"
              />
            </svg>
          </div>

          <div
            class="border border-[#EBEBEC] p-[10px] rounded-[8px] cursor-pointer"
          >
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_16635_164601)">
                <path
                  d="M15.0704 10.6041L5.58203 8.92969V21.302C5.58203 21.867 6.04007 22.325 6.6051 22.325H22.9776C23.5426 22.325 24.0006 21.867 24.0006 21.302V16.7436L15.0704 10.6041Z"
                  fill="#185C37"
                />
                <path
                  d="M15.0704 0H6.6051C6.04007 0 5.58203 0.458041 5.58203 1.02307V5.5814L15.0704 11.1628L20.0937 12.8372L24.0006 11.1628V5.5814L15.0704 0Z"
                  fill="#21A366"
                />
                <path
                  d="M5.58203 5.58203H15.0704V11.1634H5.58203V5.58203Z"
                  fill="#107C41"
                />
                <path
                  opacity="0.1"
                  d="M12.3729 4.46484H5.58203V18.4183H12.3729C12.9372 18.4165 13.3942 17.9595 13.396 17.3953V5.48791C13.3942 4.92365 12.9372 4.46668 12.3729 4.46484Z"
                  fill="black"
                />
                <path
                  opacity="0.2"
                  d="M11.8148 5.02344H5.58203V18.9769H11.8148C12.379 18.9751 12.836 18.5181 12.8378 17.9539V6.0465C12.836 5.48224 12.379 5.02527 11.8148 5.02344Z"
                  fill="black"
                />
                <path
                  opacity="0.2"
                  d="M11.8148 5.02344H5.58203V17.8606H11.8148C12.379 17.8588 12.836 17.4018 12.8378 16.8376V6.0465C12.836 5.48224 12.379 5.02527 11.8148 5.02344Z"
                  fill="black"
                />
                <path
                  opacity="0.2"
                  d="M11.2566 5.02344H5.58203V17.8606H11.2566C11.8209 17.8588 12.2779 17.4018 12.2797 16.8376V6.0465C12.2779 5.48224 11.8209 5.02527 11.2566 5.02344Z"
                  fill="black"
                />
                <path
                  d="M1.02307 5.02344H11.256C11.821 5.02344 12.2791 5.48148 12.2791 6.0465V16.2794C12.2791 16.8445 11.821 17.3025 11.256 17.3025H1.02307C0.458041 17.3025 0 16.8445 0 16.2794V6.0465C0 5.48148 0.458041 5.02344 1.02307 5.02344Z"
                  fill="url(#paint0_linear_16635_164601)"
                />
                <path
                  d="M3.16797 14.4873L5.32015 11.1524L3.34825 7.83594H4.93448L6.01057 9.95687C6.10993 10.1584 6.17801 10.3079 6.21486 10.4067H6.22881C6.2995 10.246 6.37392 10.0899 6.45206 9.93844L7.60238 7.83706H9.05857L7.03643 11.134L9.10993 14.4873H7.56053L6.31755 12.1593C6.259 12.0602 6.20932 11.9562 6.16909 11.8484H6.15068C6.11426 11.954 6.06596 12.0551 6.00667 12.1498L4.72686 14.4873H3.16797Z"
                  fill="white"
                />
                <path
                  d="M22.9775 0H15.0703V5.5814H24.0005V1.02307C24.0005 0.458041 23.5425 0 22.9775 0Z"
                  fill="#33C481"
                />
                <path
                  d="M15.0703 11.1621H24.0005V16.7435H15.0703V11.1621Z"
                  fill="#107C41"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_16635_164601"
                  x1="2.13312"
                  y1="4.22403"
                  x2="10.1459"
                  y2="18.1019"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#18884F" />
                  <stop offset="0.5" stop-color="#117E43" />
                  <stop offset="1" stop-color="#0B6631" />
                </linearGradient>
                <clipPath id="clip0_16635_164601">
                  <rect width="24" height="22.3256" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div
            class="border border-[#EBEBEC] p-[10px] rounded-[8px] cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_16635_164599)">
                <path
                  d="M2.99999 0H15.7447L22.5 6.72902V22.5C22.5 23.3287 21.828 24 21 24H2.99999C2.17196 24 1.5 23.3287 1.5 22.5V1.49999C1.5 0.671265 2.17204 0 2.99999 0Z"
                  fill="#E2574C"
                />
                <path
                  d="M22.4782 6.75062H17.25C16.422 6.75062 15.75 6.07866 15.75 5.25064V0.015625L22.4782 6.75062Z"
                  fill="#B53629"
                />
                <path
                  d="M16.8738 11.373C17.1251 11.373 17.2481 11.154 17.2481 10.9418C17.2481 10.722 17.1198 10.5098 16.8738 10.5098H15.4428C15.1631 10.5098 15.0071 10.7415 15.0071 10.9973V14.514C15.0071 14.8275 15.1856 15.0015 15.4271 15.0015C15.6671 15.0015 15.8463 14.8275 15.8463 14.514V13.5488H16.7119C16.9804 13.5488 17.1146 13.329 17.1146 13.1108C17.1146 12.8971 16.9804 12.6847 16.7119 12.6847H15.8463V11.373H16.8738ZM12.0371 10.5098H10.99C10.7058 10.5098 10.504 10.7048 10.504 10.9942V14.517C10.504 14.8762 10.7942 14.9888 11.002 14.9888H12.1008C13.4012 14.9888 14.26 14.133 14.26 12.8122C14.2593 11.4158 13.4508 10.5098 12.0371 10.5098ZM12.0873 14.1203H11.4491V11.3783H12.0243C12.8951 11.3783 13.2738 11.9626 13.2738 12.7688C13.2738 13.5233 12.9018 14.1203 12.0873 14.1203ZM8.25182 10.5098H7.21458C6.92132 10.5098 6.75781 10.7032 6.75781 10.9973V14.514C6.75781 14.8275 6.9453 15.0015 7.19728 15.0015C7.44925 15.0015 7.63674 14.8275 7.63674 14.514V13.4872H8.28698C9.08947 13.4872 9.75173 12.9187 9.75173 12.0045C9.75181 11.1098 9.11283 10.5098 8.25182 10.5098ZM8.23459 12.6623H7.63682V11.3355H8.23459C8.6036 11.3355 8.83834 11.6235 8.83834 11.9993C8.83757 12.3743 8.6036 12.6623 8.23459 12.6623Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_16635_164599">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      `;
    return html`
      <div class="relative py-5 overflow-x-auto shadow-md sm:rounded-lg">
        <!-- Add  -->
        <div class="flex justify-between flex-wrap">
          ${withFilter} ${withAdd}
        </div>
        <div class="relative overflow-x-auto  sm:rounded-lg">
          <div
            class="flex items-center justify-between flex-column mb-3 p-5 flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900"
          >
            <div>
              <h3 class="font-bold text-[20px]">${this.title}</h3>
            </div>
            <div class="flex gap-x-2">
              <label for="table-search" class="sr-only">Search</label>

              <div class="relative">
                <div
                  class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="table-search-users"
                  class="block  p-[10px] px-[14px] ps-10 text-sm text-gray-900 border border-[#EBEBEC] rounded-lg w-80  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-0 focus:border-[#EBEBEC]"
                  placeholder="بحث"
                />
              </div>
              ${withPrinter}
            </div>
          </div>
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                ${this.columns?.map(
                  (column) => html`
                    <th scope="col" class="px-6 py-3 font-semibold">
                      ${column}
                    </th>
                  `
                )}
              </tr>
            </thead>
            <tbody>
              ${this.rows?.map(
                (row, index) => html`
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              ${Object.values(row).map(
                (cell) => html`
                  <td class="px-6 py-4">
                    ${row?.name === cell && this.img
                      ? html`
                          <div
                            class="flex items-center  text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <img
                              class="w-10 h-10 rounded-full"
                              src=${this.img}
                              alt="Jese image"
                            />
                            <div class="ps-3">
                              <div class="text-[16px] font-semibold ">
                                ${cell}
                              </div>
                            </div>
                          </div>
                        `
                      : cell}
                  </td>
                `
              )}
                <td class="px-6 py-4 text-[#475467] ">
                 <div>
                   <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction${index}" class="inline-flex items-center" type="button">
                       <span class="sr-only">Action button</span>
                       <svg class="cursor-pointer" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M9.48828 17.6115C9.48828 18.6126 10.3074 19.4316 11.3085 19.4316C12.3096 19.4316 13.1286 18.6126 13.1286 17.6115C13.1286 16.6104 12.3096 15.7913 11.3085 15.7913C10.3074 15.7913 9.48828 16.6104 9.48828 17.6115Z" stroke="#292D32" stroke-width="1.63816"/>
                         <path d="M9.48828 4.87123C9.48828 5.87233 10.3074 6.69141 11.3085 6.69141C12.3096 6.69141 13.1286 5.87233 13.1286 4.87123C13.1286 3.87013 12.3096 3.05106 11.3085 3.05106C10.3074 3.05106 9.48828 3.87013 9.48828 4.87123Z" stroke="#292D32" stroke-width="1.63816"/>
                         <path d="M9.48828 11.2404C9.48828 12.2415 10.3074 13.0605 11.3085 13.0605C12.3096 13.0605 13.1286 12.2415 13.1286 11.2404C13.1286 10.2393 12.3096 9.4202 11.3085 9.4202C10.3074 9.4202 9.48828 10.2393 9.48828 11.2404Z" stroke="#292D32" stroke-width="1.63816"/>
                         </svg>
                   </button>
                   <!-- Dropdown menu -->
                   <div  id="dropdownAction${index}" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                       <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                           <li  data-modal-target="popup-modal" data-modal-toggle="popup-modal" class='flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'>
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.168 2.5009C14.3868 2.28203 14.6467 2.10842 14.9326 1.98996C15.2186 1.87151 15.5251 1.81055 15.8346 1.81055C16.1442 1.81055 16.4507 1.87151 16.7366 1.98996C17.0226 2.10842 17.2824 2.28203 17.5013 2.5009C17.7202 2.71977 17.8938 2.97961 18.0122 3.26558C18.1307 3.55154 18.1917 3.85804 18.1917 4.16757C18.1917 4.4771 18.1307 4.7836 18.0122 5.06956C17.8938 5.35553 17.7202 5.61537 17.5013 5.83424L6.2513 17.0842L1.66797 18.3342L2.91797 13.7509L14.168 2.5009Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                               <a href="#" class="block ">تعديل البيانات</a>
                           </li>


                             <li  data-modal-target="popup-modal2" data-modal-toggle="popup-modal2"  class='flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9987 10.2077C7.58715 10.2077 5.6237 8.24423 5.6237 5.83268C5.6237 3.42113 7.58715 1.45768 9.9987 1.45768C12.4102 1.45768 14.3737 3.42113 14.3737 5.83268C14.3737 8.24423 12.4102 10.2077 9.9987 10.2077ZM9.9987 1.87435C7.81858 1.87435 6.04036 3.65256 6.04036 5.83268C6.04036 8.0128 7.81858 9.79102 9.9987 9.79102C12.1788 9.79102 13.957 8.0128 13.957 5.83268C13.957 3.65256 12.1788 1.87435 9.9987 1.87435Z" fill="#10B981" stroke="#10B981" stroke-width="0.833333"/>
<path d="M12.3559 12.6095L12.3583 12.6101C12.467 12.64 12.5317 12.7504 12.5003 12.8645C12.4705 12.9731 12.3605 13.0377 12.2466 13.0068C11.5239 12.8042 10.7696 12.7083 10.0021 12.7083C6.2653 12.7083 3.05208 15.1448 3.05208 18.3333C3.05208 18.4449 2.9553 18.5417 2.84375 18.5417C2.7322 18.5417 2.63542 18.4449 2.63542 18.3333C2.63542 15.0744 5.86449 12.2917 10.0021 12.2917C10.8077 12.2917 11.5946 12.3953 12.3559 12.6095Z" fill="#10B981" stroke="#10B981" stroke-width="0.833333"/>
<path d="M15.0013 18.9577C13.618 18.9577 12.318 18.2244 11.618 17.0327C11.243 16.4327 11.043 15.7243 11.043 14.9993C11.043 13.7827 11.5846 12.6577 12.5263 11.9077C13.2263 11.3493 14.1096 11.041 15.0013 11.041C17.1846 11.041 18.9596 12.816 18.9596 14.9993C18.9596 15.7243 18.7596 16.4327 18.3846 17.041C18.1763 17.391 17.9096 17.7077 17.593 17.9744C16.9013 18.6077 15.9763 18.9577 15.0013 18.9577ZM15.0013 12.291C14.3846 12.291 13.8013 12.4993 13.3096 12.891C12.668 13.3993 12.293 14.1743 12.293 14.9993C12.293 15.491 12.4263 15.9743 12.6846 16.391C13.168 17.2077 14.0596 17.7077 15.0013 17.7077C15.6596 17.7077 16.293 17.466 16.7763 17.0327C16.993 16.8494 17.1763 16.6327 17.3096 16.3993C17.5763 15.9743 17.7096 15.491 17.7096 14.9993C17.7096 13.5077 16.493 12.291 15.0013 12.291Z" fill="#10B981"/>
<path d="M14.526 16.4506C14.3677 16.4506 14.2094 16.3923 14.0844 16.2673L13.2594 15.4423C13.0177 15.2006 13.0177 14.8006 13.2594 14.5589C13.501 14.3173 13.901 14.3173 14.1427 14.5589L14.5427 14.959L15.876 13.7256C16.126 13.4923 16.526 13.509 16.7594 13.759C16.9927 14.009 16.976 14.409 16.726 14.6423L14.951 16.2839C14.826 16.3923 14.676 16.4506 14.526 16.4506Z" fill="#10B981"/>
</svg>

       <a href="#" class="block text-[#10B981] ">تنشيط المستخدم</a>
                           </li>


                             <li data-modal-target="popup-modal3" data-modal-toggle="popup-modal3" class='flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'>
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
             </td>
              
            </tr>
          `
              )}
            </tbody>
          </table>

          <!-- Edit Item -->
          <div
            id="popup-modal"
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[999] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-[50%] max-h-full">
              <div
                class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700"
              >
                <!-- Modal header -->
                <div
                  class="flex items-center justify-between p-4 md:p-[15px] border-b rounded-t bg-[#FFF6EE] border-gray-200"
                >
                  <h3 class="text-lg font-bold text-[#F88F2D]">تنبيه هام</h3>
                  <button
                    type="button"
                    class="text-[#F88F2D] bg-transparent rounded-lg ms-auto inline-flex justify-center items-center"
                    data-modal-toggle="crud-modal"
                  >
                    <svg
                      data-modal-hide="popup-modal"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0013 30.3327C8.09464 30.3327 1.66797 23.906 1.66797 15.9993C1.66797 8.09268 8.09464 1.66602 16.0013 1.66602C23.908 1.66602 30.3346 8.09268 30.3346 15.9993C30.3346 23.906 23.908 30.3327 16.0013 30.3327ZM16.0013 3.66602C9.2013 3.66602 3.66797 9.19935 3.66797 15.9993C3.66797 22.7993 9.2013 28.3327 16.0013 28.3327C22.8013 28.3327 28.3346 22.7993 28.3346 15.9993C28.3346 9.19935 22.8013 3.66602 16.0013 3.66602Z"
                        fill="#F88F2D"
                      />
                      <path
                        d="M12.2271 20.7738C11.9738 20.7738 11.7205 20.6805 11.5205 20.4805C11.1338 20.0938 11.1338 19.4538 11.5205 19.0671L19.0671 11.5205C19.4538 11.1338 20.0938 11.1338 20.4805 11.5205C20.8671 11.9071 20.8671 12.5471 20.4805 12.9338L12.9338 20.4805C12.7471 20.6805 12.4805 20.7738 12.2271 20.7738Z"
                        fill="#F88F2D"
                      />
                      <path
                        d="M19.7738 20.7738C19.5205 20.7738 19.2671 20.6805 19.0671 20.4805L11.5205 12.9338C11.1338 12.5471 11.1338 11.9071 11.5205 11.5205C11.9071 11.1338 12.5471 11.1338 12.9338 11.5205L20.4805 19.0671C20.8671 19.4538 20.8671 20.0938 20.4805 20.4805C20.2805 20.6805 20.0271 20.7738 19.7738 20.7738Z"
                        fill="#F88F2D"
                      />
                    </svg>

                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div class="p-4 md:p-5 text-center">
                  <svg
                    class="mx-auto mb-4 text-gray-400 w-[80px] h-[80px] dark:text-gray-200"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.0013 73.3346C58.4013 73.3346 73.3346 58.4013 73.3346 40.0013C73.3346 21.6013 58.4013 6.66797 40.0013 6.66797C21.6013 6.66797 6.66797 21.6013 6.66797 40.0013C6.66797 58.4013 21.6013 73.3346 40.0013 73.3346Z"
                      stroke="#F88F2D"
                      stroke-width="3.75"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.9987 16.668L16.332 63.3346"
                      stroke="#F88F2D"
                      stroke-width="3.75"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <h3 class="mb-5 text-[20px] font-semibold text-[#12161C]">
                    هل أنت متأكد أنك تريد إلغاء تنشيط حساب هذا المستخدم؟
                  </h3>
                  <p class="text-[#12161C] mb-4">
                    لن يتمكن المستخدم من الوصول إلى الحساب أو الخدمات المرتبطة
                    به حتى يتم إعادة التنشيط.
                  </p>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="border border-[#F88F2D] mx-auto py-[14px] px-[32px] text-[#F88F2D]   font-semibold text-[14px] rounded-lg w-full items-center text-center"
                  >
                    تأكيد إلغاء التنشيط
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="border border-[#F88F2D] mx-auto py-[14px] px-[32px] text-white mt-3 bg-[#F88F2D]   font-semibold text-[14px] rounded-lg w-full items-center text-center"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- End Edit -->

          <!-- Actice Item -->
          <div
            id="popup-modal2"
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[999] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-[50%] max-h-full">
              <div
                class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700"
              >
                <!-- Modal header -->
                <div
                  class="flex items-center justify-between p-4 md:p-[15px] border-b rounded-t bg-[#ECF9F5] border-gray-200"
                >
                  <h3 class="text-lg font-bold text-[#10B981]">تنبيه هام</h3>
                  <button
                    type="button"
                    class="text-[#10B981] bg-transparent rounded-lg ms-auto inline-flex justify-center items-center"
                    data-modal-toggle="crud-modal"
                  >
                    <svg
                      data-modal-hide="popup-modal2"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0013 30.3327C8.09464 30.3327 1.66797 23.906 1.66797 15.9993C1.66797 8.09268 8.09464 1.66602 16.0013 1.66602C23.908 1.66602 30.3346 8.09268 30.3346 15.9993C30.3346 23.906 23.908 30.3327 16.0013 30.3327ZM16.0013 3.66602C9.2013 3.66602 3.66797 9.19935 3.66797 15.9993C3.66797 22.7993 9.2013 28.3327 16.0013 28.3327C22.8013 28.3327 28.3346 22.7993 28.3346 15.9993C28.3346 9.19935 22.8013 3.66602 16.0013 3.66602Z"
                        fill="#10B981"
                      />
                      <path
                        d="M12.2271 20.7738C11.9738 20.7738 11.7205 20.6805 11.5205 20.4805C11.1338 20.0938 11.1338 19.4538 11.5205 19.0671L19.0671 11.5205C19.4538 11.1338 20.0938 11.1338 20.4805 11.5205C20.8671 11.9071 20.8671 12.5471 20.4805 12.9338L12.9338 20.4805C12.7471 20.6805 12.4805 20.7738 12.2271 20.7738Z"
                        fill="#10B981"
                      />
                      <path
                        d="M19.7738 20.7738C19.5205 20.7738 19.2671 20.6805 19.0671 20.4805L11.5205 12.9338C11.1338 12.5471 11.1338 11.9071 11.5205 11.5205C11.9071 11.1338 12.5471 11.1338 12.9338 11.5205L20.4805 19.0671C20.8671 19.4538 20.8671 20.0938 20.4805 20.4805C20.2805 20.6805 20.0271 20.7738 19.7738 20.7738Z"
                        fill="#10B981"
                      />
                    </svg>

                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div class="p-4 md:p-5 text-center">
                  <svg
                    class="mx-auto mb-4 text-gray-400 w-[80px] h-[80px] dark:text-gray-200"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.9297 40.0003L35.963 48.0669L52.063 31.9336"
                      stroke="#10B981"
                      stroke-width="3.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M35.8297 8.16445C38.1297 6.19779 41.8964 6.19779 44.2297 8.16445L49.4964 12.6978C50.4964 13.5645 52.363 14.2645 53.6964 14.2645H59.363C62.8964 14.2645 65.7964 17.1645 65.7964 20.6978V26.3645C65.7964 27.6645 66.4964 29.5645 67.363 30.5645L71.8964 35.8311C73.863 38.1311 73.863 41.8978 71.8964 44.2311L67.363 49.4978C66.4964 50.4978 65.7964 52.3645 65.7964 53.6978V59.3645C65.7964 62.8978 62.8964 65.7978 59.363 65.7978H53.6964C52.3964 65.7978 50.4964 66.4978 49.4964 67.3645L44.2297 71.8978C41.9297 73.8645 38.163 73.8645 35.8297 71.8978L30.563 67.3645C29.563 66.4978 27.6964 65.7978 26.363 65.7978H20.5964C17.063 65.7978 14.163 62.8978 14.163 59.3645V53.6645C14.163 52.3645 13.463 50.4978 12.6297 49.4978L8.12969 44.1978C6.19635 41.8978 6.19635 38.1645 8.12969 35.8645L12.6297 30.5645C13.463 29.5645 14.163 27.6978 14.163 26.3978V20.6645C14.163 17.1311 17.063 14.2311 20.5964 14.2311H26.363C27.663 14.2311 29.563 13.5311 30.563 12.6645L35.8297 8.16445Z"
                      stroke="#10B981"
                      stroke-width="3.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <h3 class="mb-5 text-[20px] font-semibold text-[#12161C]">
                    هل أنت متأكد أنك تريد تنشيط حساب هذا المستخدم؟
                  </h3>
                  <p class="text-[#12161C] mb-4">
                    سيتمكن المستخدم من الوصول إلى الحساب والخدمات المرتبطة به
                    فورًا بعد التنشيط.
                  </p>
                  <button
                    data-modal-hide="popup-modal2"
                    type="button"
                    class="border border-[#10B981] mx-auto py-[14px] px-[32px] text-[#10B981]   font-semibold text-[14px] rounded-lg w-full items-center text-center"
                  >
                    تأكيد التنشيط
                  </button>
                  <button
                    data-modal-hide="popup-modal2"
                    type="button"
                    class="border border-[#10B981] mx-auto py-[14px] px-[32px] text-white mt-3 bg-[#10B981]   font-semibold text-[14px] rounded-lg w-full items-center text-center"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- End Active -->

          <!-- Actice Item -->
          <div
            id="popup-modal3"
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[999] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-[50%] max-h-full">
              <div
                class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700"
              >
                <!-- Modal header -->
                <div
                  class="flex items-center justify-between p-4 md:p-[15px] border-b rounded-t bg-[#FDEEEE] border-gray-200"
                >
                  <h3 class="text-lg font-bold text-[#E92727]">تنبيه هام</h3>
                  <button
                    type="button"
                    class="text-[#E92727] bg-transparent rounded-lg ms-auto inline-flex justify-center items-center"
                    data-modal-toggle="crud-modal"
                  >
                    <svg
                      data-modal-hide="popup-modal3"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0013 30.3327C8.09464 30.3327 1.66797 23.906 1.66797 15.9993C1.66797 8.09268 8.09464 1.66602 16.0013 1.66602C23.908 1.66602 30.3346 8.09268 30.3346 15.9993C30.3346 23.906 23.908 30.3327 16.0013 30.3327ZM16.0013 3.66602C9.2013 3.66602 3.66797 9.19935 3.66797 15.9993C3.66797 22.7993 9.2013 28.3327 16.0013 28.3327C22.8013 28.3327 28.3346 22.7993 28.3346 15.9993C28.3346 9.19935 22.8013 3.66602 16.0013 3.66602Z"
                        fill="#E92727"
                      />
                      <path
                        d="M12.2271 20.7738C11.9738 20.7738 11.7205 20.6805 11.5205 20.4805C11.1338 20.0938 11.1338 19.4538 11.5205 19.0671L19.0671 11.5205C19.4538 11.1338 20.0938 11.1338 20.4805 11.5205C20.8671 11.9071 20.8671 12.5471 20.4805 12.9338L12.9338 20.4805C12.7471 20.6805 12.4805 20.7738 12.2271 20.7738Z"
                        fill="#E92727"
                      />
                      <path
                        d="M19.7738 20.7738C19.5205 20.7738 19.2671 20.6805 19.0671 20.4805L11.5205 12.9338C11.1338 12.5471 11.1338 11.9071 11.5205 11.5205C11.9071 11.1338 12.5471 11.1338 12.9338 11.5205L20.4805 19.0671C20.8671 19.4538 20.8671 20.0938 20.4805 20.4805C20.2805 20.6805 20.0271 20.7738 19.7738 20.7738Z"
                        fill="#E92727"
                      />
                    </svg>

                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div class="p-4 md:p-5 text-center">
                  <svg
                    class="mx-auto mb-4 text-gray-400 w-[80px] h-[80px] dark:text-gray-200"
                    width="76"
                    height="67"
                    viewBox="0 0 76 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.0025 23.6667V37M38.0025 50.3334H38.0358M32.3025 6.53337L4.06918 53.6667C3.48707 54.6748 3.17907 55.8177 3.17581 56.9818C3.17255 58.1458 3.47415 59.2905 4.0506 60.3018C4.62705 61.3131 5.45826 62.1559 6.46154 62.7462C7.46481 63.3365 8.60518 63.6539 9.76918 63.6667H66.2358C67.3998 63.6539 68.5402 63.3365 69.5435 62.7462C70.5468 62.1559 71.378 61.3131 71.9544 60.3018C72.5309 59.2905 72.8325 58.1458 72.8292 56.9818C72.826 55.8177 72.518 54.6748 71.9358 53.6667L43.7025 6.53337C43.1083 5.55372 42.2716 4.74376 41.2732 4.18164C40.2747 3.61953 39.1483 3.32422 38.0025 3.32422C36.8567 3.32422 35.7303 3.61953 34.7319 4.18164C33.7334 4.74376 32.8967 5.55372 32.3025 6.53337Z"
                      stroke="#E92727"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <h3 class="mb-5 text-[20px] font-semibold text-[#12161C]">
                    هل أنت متأكد من حذف المستخدم؟
                  </h3>
                  <p class="text-[#12161C] mb-4">
                    أنت على وشك حذف هذا المستخدم من النظام. هذا الإجراء لا يمكن
                    التراجع عنه، وستفقد جميع البيانات المرتبطة بهذا المستخدم
                    بشكل دائم.
                  </p>
                  <button
                    data-modal-hide="popup-modal3"
                    type="button"
                    class="border border-[#E92727] mx-auto py-[14px] px-[32px] text-[#E92727]   font-semibold text-[14px] rounded-lg w-full items-center text-center"
                  >
                    تأكيد التنشيط
                  </button>
                  <button
                    data-modal-hide="popup-modal3"
                    type="button"
                    class="border border-[#E92727] mx-auto py-[14px] px-[32px] text-white mt-3 bg-[#E92727]   font-semibold text-[14px] rounded-lg w-full items-center text-center"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- End Active -->

          <nav
            class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 p-4 mt-5"
            aria-label="Table navigation"
          >
            <button
              class="border text-[14px] flex gap-x-3 justify-center items-center rounded-[8.5px] button-shadow border-[#D0D5DD] py-[9px] px-[16px]"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.21094 7.68702H13.9522M13.9522 7.68702L7.58155 1.31641M13.9522 7.68702L7.58155 14.0576"
                  stroke="#344054"
                  stroke-width="1.82382"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              السابق
            </button>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <a
                  href="#"
                  class="flex items-center rounded-[9px] p-[13px] bg-[#EBF2FF] justify-center px-3 h-8 leading-tight text-[#377DFF]"
                  >1</a
                >
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center rounded-[9px]  justify-center px-3 h-8 leading-tight text-[14px] text-[#667085]"
                  >2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center rounded-[9px]  justify-center px-3 h-8 leading-tight text-[14px] text-[#667085]"
                  >3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center rounded-[9px]  justify-center px-3 h-8 leading-tight text-[14px] text-[#667085]"
                  >...</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center rounded-[9px]  justify-center px-3 h-8 leading-tight text-[14px] text-[#667085]"
                  >8</a
                >
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center rounded-[9px]  justify-center px-3 h-8 leading-tight text-[14px] text-[#667085]"
                  >9</a
                >
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center rounded-[9px]  justify-center px-3 h-8 leading-tight text-[14px] text-[#667085]"
                  >10</a
                >
              </li>
            </ul>

            <button
              class="border text-[14px] flex gap-x-3 justify-center items-center rounded-[8.5px] button-shadow border-[#D0D5DD] py-[9px] px-[16px]"
            >
              التالى
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.792 7.68702H1.05078M1.05078 7.68702L7.42139 14.0576M1.05078 7.68702L7.42139 1.31641"
                  stroke="#344054"
                  stroke-width="1.82382"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    `;
  }
}
