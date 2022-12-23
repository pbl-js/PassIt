import clsx from 'clsx';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Paragraph } from '../../../components/Paragraph/Paragraph';

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
          'w-full grid grid-cols-1 grid-rows-[auto, auto] gap-8',
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
    </div>
  );
}
