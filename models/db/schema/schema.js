module.exports = {
  merchants: {
    uid: { type: 'string', nullable: false, primary: true },
    user_uid: { type: 'string', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
    created_at: { type: 'dateTime', nullable: false },
    created_by: { type: 'string', nullable: false },
    updated_by: { type: 'string', nullable: true },
  },
  hotels: {
    uid: { type: 'string', nullable: false, primary: true },
    name: { type: 'string', nullable: false, unique: true },
    merchant_uid: {
      type: 'string',
      nullable: false,
      references: 'merchants.uid',
    },
    description: { type: 'string', maxlength: 2000, nullable: true },
    slug: { type: 'string', nullable: false, unique: true },
    logo: { type: 'string', maxlength: 2000, nullable: true },
    status: {
      type: 'string',
      maxlength: 50,
      nullable: false,
      defaultTo: 'inactive',
    },
    created_at: { type: 'dateTime', nullable: false },
    updated_at: { type: 'dateTime', nullable: true },
    created_by: { type: 'string', nullable: false },
    updated_by: { type: 'string', nullable: true },
  },
};
