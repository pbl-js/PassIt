import clsx from 'clsx';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Paragraph } from '../../../components/Paragraph/Paragraph';

const topicsList = [
  {
    title: 'Warzywa',
    color: '#B953EA',
  },
  {
    title: 'Owoce',
    color: '#3CB847',
  },
  {
    title: 'Kawiarnia',
    color: '#ED7E0E',
  },
  {
    title: 'Grill',
    color: '#D00576',
  },
  {
    title: 'Słodycze',
    color: '#217AD1',
  },
  {
    title: 'Supermarket',
    color: '#0AB1B4',
  },
];

const topSectionsPadding = 'p-12';

function SavedWordsWidget() {
  return (
    <>
      <div
        className={`flex lg:hidden bg-white/5 rounded-2xl ${topSectionsPadding}`}
      >
        <p className="text-3xl font-semibold text-white">Words List mobile</p>
      </div>
      <div
        className={`hidden lg:flex  bg-white/5 rounded-2xl ${topSectionsPadding}`}
      >
        <p className="text-3xl font-semibold text-white">Words list desktop</p>
      </div>
    </>
  );
}

function LoadingComponent({}: { children: React.ReactNode }) {}

export default function PlayPage() {
  return (
    <div className="flex flex-col w-full">
      <div
        className={clsx(
          'w-full grid grid-cols-1 grid-rows-[auto, auto] gap-8 mb-20',
          'lg:grid-cols-2 lg:grid-rows-1'
        )}
      >
        <div
          className={clsx(
            `flex flex-col bg-white/5 rounded-2xl ${topSectionsPadding} gap-8`,
            'text-3xl font-semibold text-white'
          )}
        >
          <Paragraph loading={true} className="text-[22px] uppercase">
            Jedzenie i picie
          </Paragraph>
          <p className="text-5xl">Kawa i herbata</p>
          <p>Progress data</p>
          <Button href="/learn/play">Continue</Button>
        </div>
        <SavedWordsWidget />
      </div>
      <div className="mb-10">
        <Paragraph className="text-4xl font-semibold mb-6">
          Moje zestawy
        </Paragraph>
        <div className="flex flex-wrap flex-row gap-5">
          {topicsList.map(
            ({ title, color }, index) =>
              index > 3 && (
                <div
                  key={title}
                  style={{ backgroundColor: color }}
                  className="w-[214px] h-[164px] rounded-xl"
                >
                  title
                </div>
              )
          )}
        </div>
      </div>

      <div className="mb-10">
        <Paragraph className="text-4xl font-semibold mb-6">
          Czasowniki nieregularne
        </Paragraph>
        <div className="flex flex-wrap flex-row gap-5">
          {topicsList.map(({ title, color }) => (
            <div
              key={title}
              style={{ backgroundColor: color }}
              className="w-[214px] h-[164px] rounded-xl"
            >
              title
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <Paragraph className="text-4xl font-semibold mb-6">
          Zestawy premium
        </Paragraph>
        <div className="flex flex-wrap flex-row gap-5">
          {topicsList.map(({ title, color }) => (
            <div
              key={title}
              style={{ backgroundColor: color }}
              className="w-[214px] h-[164px] rounded-xl"
            >
              title
            </div>
          ))}
          {topicsList.map(({ title, color }) => (
            <div
              key={title}
              style={{ backgroundColor: color }}
              className="w-[214px] h-[164px] rounded-xl"
            >
              title
            </div>
          ))}
        </div>
      </div>

      <Button href="/learn/profile">fsdf</Button>
    </div>
  );
}
