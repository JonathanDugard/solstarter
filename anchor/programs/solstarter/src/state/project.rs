use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct Project {
    pub owner_pubkey: Pubkey,

    #[max_len(64)]
    pub name: String,

    #[max_len(128)]
    pub image_url: String,

    #[max_len(3000)]
    pub project_description: String,

    pub goal_amount: u32,
    pub raised_amount: u32,
    pub end_time: u64,
    pub status: Status,
    pub contribution_counter: u16,

    #[max_len(972)] //3 rewards of 324 bytes each
    pub rewards: Vec<Reward>,
}

impl Project {
    pub const ACCOUNT_LEN: usize =
        32 + (4 + 64) + (4 + 128) + (4 + 3000) + 4 + 4 + 8 + 1 + 2 + (4 + 3 * (64 + 256 + 4)); // Length of the account 4231 bytes
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, InitSpace)]
pub struct Reward {
    #[max_len(64)]
    pub name: String,

    #[max_len(256)]
    pub reward_description: String,

    pub reward_amount: u32,
}

#[derive(Clone, InitSpace, AnchorSerialize, AnchorDeserialize)]
pub enum Status {
    Draft = 0,
    Ongoing = 1,
    Completed = 2,
    Abandoned = 3,
}