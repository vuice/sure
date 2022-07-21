const mockPolicyHoldersList = {
  policyHolders: [
    [
      {
        key: 'Name',
        value: 'Nicholas Vu',
      },
      {
        key: 'Age',
        value: 123,
      },
      {
        key: 'Address',
        value: `123 Anywhere Lane, Suite 123, My City, My State, 12345`,
      },
      {
        key: 'Phone number',
        value: '+1-999-999-9999',
      },
      {
        key: 'Primary policy holder?',
        value: 'No',
      },
    ],
    [
      {
      key: 'Name',
      value: '2 Nicholas Vu',
      },
      {
        key: 'Age',
        value: 2123,
      },
      {
        key: 'Address',
        value: `2 123 Anywhere Lane, Suite 123, My City, My State, 12345`,
      },
      {
        key: 'Phone number',
        value: '2 +1-999-999-9999',
      },
      {
        key: 'Primary policy holder?',
        value: '2 No',
      },
    ]
  ]
};

const mockSinglePolicyHolder = {
  name: "My Name 100",
  age: 100,
  address: {
    line1: "100 Any Street",
    line2: "Apt 100",
    city: "City 100",
    state: "State 100",
    postalCode: "100100"
  },
  phoneNumber: "+1-100-100-1000"
}

export { mockPolicyHoldersList, mockSinglePolicyHolder };
