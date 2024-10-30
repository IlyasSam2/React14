import style from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'


export function Accordeon() {
    return (
        <>
            <div className={style.accordeon}>
                <AccordeonItem title='Факт №1' text='Мама учила не ругаться матом, но жизнь научила не ругаться матом при маме.' />
                <AccordeonItem title='Факт №2' text='Работа не волк. Никто не волк. Только волк — волк.' />
                <AccordeonItem title='Факт №3' text='Если закрыть глаза, становится темно.' />
            </div>
        </>
    )
}