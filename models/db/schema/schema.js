module.exports = {
  address: {
    uid: createColumn('string', false, true),
    line1: createColumn('string'),
    line2: createColumn('string'),
    city: createColumn('string', false),
    street: createColumn('string', false),
    state: createColumn('string', false),
    country: createColumn('string', false),
    zip: createColumn('string', false),
    is_active: createColumn('boolean', false),
    formatted_address: createColumn('string'),
    google_place_id: createColumn('string'),
    lat: createColumn('decimal'),
    lng: createColumn('decimal'),

    updated_at: createColumn('dateTime', true),
    created_at: createColumn('dateTime', false),
    created_by: createColumn('string', false),
    updated_by: createColumn('string', false),
    hotel_uid: { type: 'string', nullable: false, references: 'hotel.uid' },
  },
  merchant: {
    uid: { type: 'string', nullable: false, primary: true },
    name: { type: 'string', nullable: false, unique: true },
    description: { type: 'string', maxlength: 2000, nullable: true },
    logo: { type: 'string' },
    cover: { type: 'string' },
    phone: { type: 'string' },
    facebook_url: { type: 'string' },
    twitter_url: { type: 'string' },

    updated_at: { type: 'dateTime', nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    created_by: { type: 'string', nullable: false },
    updated_by: { type: 'string', nullable: true },
  },
  hotel: {
    uid: { type: 'string', nullable: false, primary: true },
    name: { type: 'string', nullable: false, unique: true },
    description: { type: 'string', maxlength: 2000, nullable: true },
    slug: { type: 'string', nullable: false, unique: true },
    logo: { type: 'string', nullable: true },
    status: {
      type: 'string',
      maxlength: 50,
      nullable: false,
      defaultTo: 'inactive',
    },

    merchant_uid: { type: 'string', nullable: false, references: 'merchant.uid' },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
    created_by: { type: 'string', nullable: false },
    updated_by: { type: 'string', nullable: true },
  },
  room: {
    uid: { type: 'string', nullable: false, primary: true },
    name: { type: 'string', nullable: false, unique: true },
    number: { type: 'string', nullable: false },
    description: { type: 'string', maxlength: 2000, nullable: true },
    inclusion: { type: 'text' },
    thumbnail: { type: 'string', nullable: false },
    price: { type: 'decimal', nullable: false },
    max_people_allowed: { type: 'integer', nullable: false },
    number_of_beds: { type: 'integer', nullable: false },
    offer_price: { type: 'decimal' },

    status: {
      type: 'string',
      maxlength: 50,
      nullable: false,
      defaultTo: 'inactive', // free, occupied, inactive
    },
    type: {
      type: 'string',
      maxlength: 50,
      nullable: false,
      defaultTo: 'executive',
    },
    hotel_uid: { type: 'string', nullable: false, references: 'hotel.uid' },

    updated_at: { type: 'dateTime', nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    created_by: { type: 'string', nullable: false },
    updated_by: { type: 'string', nullable: true },
  },
  booking: {
    uid: { type: 'string', nullable: false, primary: true },
    first_name: { type: 'string' },
    last_name:  { type: 'string' },
    age:   { type: 'string', nullable: false },
    email: { type: 'string', nullable: false },
    total_guests: { type: 'integer', nullable: false },
    booking_source: { type: 'string', nullable: false },

    check_in:  { type: 'dateTime' },
    check_out: { type: 'dateTime' },

    amount: { type: 'decimal', nullable: false },
    payment_mode: { type: 'string', nullable: false },

    status: {
      type: 'string',
      maxlength: 50,
      nullable: false,
      defaultTo: '',
    },
    type: {
      type: 'string',
      maxlength: 50,
      nullable: false,
      defaultTo: '',
    },
    room_uid: { type: 'string', nullable: false, references: 'room.uid' },

    updated_at: { type: 'dateTime', nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    created_by: { type: 'string', nullable: false },
    updated_by: { type: 'string', nullable: true },
  }
};

function createColumn(type, nullable=true, primary=false) {
  return {type, nullable, primary};
}
