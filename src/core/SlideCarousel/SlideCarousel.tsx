import { dFlex } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { useGesture } from '@use-gesture/react';
import React, { useEffect, useRef, useState } from 'react';
import { animated, useSprings } from 'react-spring';

import { ComponentContainer } from '../ComponentContainer/ComponentContainer';
import { Arrow, ArrowComponentType, ArrowStyle } from './Arrow/Arrow';
import { Bullet, BulletComponentType, BulletStyle } from './Bullet/Bullet';
import { Bullets, BulletsComponentType } from './Bullets/Bullets';
import styles from './SlideCarousel.module.scss';

export interface SliderProps {
  activeIndex?: number;
  initialIndex?: number; // @todo make that when This is set - we do not animate when opening carousel on N-th image
  ArrowComponent?: ArrowComponentType;
  arrowStyle?: ArrowStyle;
  auto?: number;
  BulletComponent?: BulletComponentType;
  BulletsComponent?: BulletsComponentType;
  bulletStyle?: BulletStyle;
  children?: React.ReactNode[];
  hasArrows?: boolean;
  hasBullets?: boolean;
  onSlideChange?: (slide: number) => void;
  setSlideCustom?: (slide: number) => number;
  slidesAtOnce?: number;
  slidesToSlide?: number;
}

const clamp = (input: number, lower: number, upper: number) => Math.min(Math.max(input, lower), upper);

export const SlideCarousel: React.FunctionComponent<SliderProps> = ({
  activeIndex = 0,
  initialIndex = activeIndex,
  ArrowComponent = Arrow,
  arrowStyle = {},
  auto = 0,
  BulletComponent = Bullet,
  BulletsComponent = Bullets,
  bulletStyle = {},
  children = [],
  hasArrows = false,
  hasBullets = false,
  onSlideChange = () => undefined,
  setSlideCustom = undefined,
  slidesAtOnce = 1,
  slidesToSlide = 1,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slide, setSlideOriginal] = useState(0);
  const setSlide = setSlideCustom ? (index: number) => setSlideOriginal(setSlideCustom(index)) : setSlideOriginal;
  const [isDragging, setDragging] = useState(false);

  if (!children) {
    children = [];
  }

  // Initialize slides with spring
  const [springProps, springPropsRef] = useSprings(children?.length || 0, (index) => ({
    offset: index,
  }));

  // Bindings to set on the element
  const gestureBinds = useGesture(
    {
      onDrag: ({ down, movement: [xDelta], direction: [xDir], cancel, first, active }) => {
        if (first) {
          setDragging(true);
        }
        if (sliderRef && sliderRef.current && sliderRef.current.parentElement) {
          const { width } = sliderRef.current.parentElement.getBoundingClientRect();

          if (down && Math.abs(xDelta) > width / 2) {
            if (cancel) cancel();
            if (active) {
              setSlide(clamp(slide + (xDir > 0 ? -1 : 1), 0, (children?.length || 0) - slidesAtOnce));
            }
          }

          springPropsRef
            .update((index) => ({
              offset: (active && down ? xDelta : 0) / width + (index - slide),
            }))
            .start();
        }
      },
      onClick: () => {
        if (isDragging) {
          setDragging(false);
          return;
        }
        clickOnSlide(slide);
      },
    },
    {
      drag: {
        delay: 200,
      },
    },
  );

  // Triggered on slide change
  useEffect(() => {
    springPropsRef.update((index) => ({ offset: index - slide })).start();
    onSlideChange(slide);
  }, [slide, springPropsRef, onSlideChange]);

  // Effect for autosliding
  useEffect(() => {
    let interval: number;

    if (auto > 0) {
      interval = window.setInterval(() => {
        const targetIndex = (slide + 1) % (children?.length || 0);
        setSlide(targetIndex);
      }, auto);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [auto, children?.length || 0, slide]);

  // Jump to slide index when prop changes
  useEffect(() => {
    setSlide(activeIndex % (children?.length || 0));
  }, [activeIndex, children?.length || 0]);

  // Sets pointer events none to every child and preserves styles
  const childs = children?.map((child, index) => (
    <div className={styles.slideCarouselSlide} key={index}>
      {child}
    </div>
  ));

  // Calls onClick on the current slide
  const clickOnSlide = (slideIndex: number) => {
    childs[slideIndex].props.children.props.onClick && childs[slideIndex].props.children.props.onClick();
  };

  const goToFirstSlide = () => {
    setSlide(0);
  };

  const goToLastSlide = () => {
    setSlide((children?.length || 0) - slidesAtOnce);
  };

  const nextSlide = () => {
    const reachedLastSlide = slide === (children?.length || 0) - slidesAtOnce;
    const nextSlideExists = slide + (slidesAtOnce - 1) + slidesToSlide < (children?.length || 0) - 1;
    if (reachedLastSlide) {
      goToFirstSlide();
    } else if (!nextSlideExists) {
      goToLastSlide();
    } else {
      setSlide(slide + slidesToSlide);
    }
  };

  const previousSlide = () => {
    if (slide === 0) {
      goToLastSlide();
    } else if (slide - slidesToSlide <= 0) {
      goToFirstSlide();
    } else {
      setSlide(slide - slidesToSlide);
    }
  };

  const bullets = () => {
    const arr = [];
    for (let index = 0; index <= (children?.length || 0) - slidesAtOnce; index++) {
      arr.push(
        <BulletComponent key={index} isActive={index === slide} onClick={() => setSlide(index)} style={bulletStyle} />,
      );
    }

    return arr;
  };

  return (
    <ComponentContainer className={styles.SlideCarouselContainer} innerRef={sliderRef}>
      <div className={styles.slideCarousel}>
        {hasArrows && (
          <React.Fragment>
            <ArrowComponent
              className={classNames(styles.slideCarouselArrow, styles.arrowLeft, dFlex)}
              style={arrowStyle}
              direction="left"
              onClick={previousSlide}
            />
            <ArrowComponent
              className={classNames(styles.slideCarouselArrow, styles.arrowRight)}
              style={arrowStyle}
              direction="right"
              onClick={nextSlide}
            />
          </React.Fragment>
        )}

        {hasBullets && (
          <BulletsComponent>
            <ul className={styles.slideCarouselBullets}>{bullets()}</ul>
          </BulletsComponent>
        )}

        {springProps.map(({ offset }, index) => (
          <animated.div
            {...gestureBinds()}
            key={index}
            className="slider__slide"
            style={{
              transform: offset?.to((offsetX) => `translate3d(${offsetX * 100}%, 0, 0)`),
              position: 'absolute',
              width: `${100 / slidesAtOnce}%`,
              height: '100%',
              willChange: 'transform',
              touchAction: 'none',
            }}
          >
            {childs[index]}
          </animated.div>
        ))}
      </div>
    </ComponentContainer>
  );
};
