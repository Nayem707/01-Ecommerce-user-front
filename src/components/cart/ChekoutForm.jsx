const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
];

export default function CheckoutForm() {
  return (
    <div className='leading-loose'>
      <form className='max-w-xl m-4 p-5 bg-white rounded '>
        <p className='text-gray-800 font-semibold text-2xl'>
          Customer information
        </p>
        <div className=''>
          <label className='block text-sm text-gray-00' for='cus_name'>
            Name
          </label>
          <input
            className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
            id='cus_name'
            name='cus_name'
            type='text'
            required=''
            placeholder='Your Name'
            aria-label='Name'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-sm text-gray-600' for='cus_email'>
            Email
          </label>
          <input
            className='w-full px-5  py-4 text-gray-700 bg-gray-200 rounded'
            id='cus_email'
            name='cus_email'
            type='text'
            required=''
            placeholder='Your Email'
            aria-label='Email'
          />
        </div>
        <div className='mt-2'>
          <label className=' block text-sm text-gray-600' for='cus_email'>
            Address
          </label>
          <input
            className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
            id='cus_email'
            name='cus_email'
            type='text'
            required=''
            placeholder='Street'
            aria-label='Email'
          />
        </div>
        <div className='mt-2'>
          <label className='hidden text-sm block text-gray-600' for='cus_email'>
            City
          </label>
          <input
            className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
            id='cus_email'
            name='cus_email'
            type='text'
            required=''
            placeholder='City'
            aria-label='Email'
          />
        </div>
        <div className='inline-block mt-2 w-1/2 pr-1'>
          <label className='hidden block text-sm text-gray-600' for='cus_email'>
            Country
          </label>
          <input
            className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
            id='cus_email'
            name='cus_email'
            type='text'
            required=''
            placeholder='Country'
            aria-label='Email'
          />
        </div>
        <div className='inline-block mt-2 -mx-1 pl-1 w-1/2'>
          <label className='hidden block text-sm text-gray-600' for='cus_email'>
            Zip
          </label>
          <input
            className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
            id='cus_email'
            name='cus_email'
            type='text'
            required=''
            placeholder='Zip'
            aria-label='Email'
          />
        </div>
        <p className='mt-4 text-gray-800 font-medium'>Payment information</p>
        <div className=''>
          <label className='block text-sm text-gray-600' for='cus_name'>
            Card
          </label>
          <input
            className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
            id='cus_name'
            name='cus_name'
            type='text'
            required=''
            placeholder='Card Number MM/YY CVC'
            aria-label='Name'
          />
        </div>
        <div className='mt-4'>
          <span className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'>
            Total: $3.00
          </span>
        </div>
      </form>
    </div>
  );
}
