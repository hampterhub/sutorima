import { Activity } from '@sutorima/schema';

type Banner = Activity & {
  type: 'banner'
};
export default function Banners() {
  const banners: Banner[] = [
    {
      type: 'banner',
      name: 'VTubers',
      state: '',
      description: 'Pull on deez',
      available: true,
      startingCost: {
        subs: 5
      },
    },
    {
      type: 'banner',
      name: 'VTuber Outfits',
      state: '',
      description: 'Pull on deez outfits',
      available: true,
      startingCost: {
        subs: 1
      },
    },
  ];
  return <>BannersKEK</>;
}
