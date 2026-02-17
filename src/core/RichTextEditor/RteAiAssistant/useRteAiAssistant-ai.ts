import { $getSelection, $isRangeSelection, LexicalEditor } from 'lexical';
import { convertHtmlToNodes } from 'lexical-toolkit';

type UseRteAiAssistantAiProps = { editor: LexicalEditor };

export const useRteAiAssistantAi = (props: UseRteAiAssistantAiProps) => {
  const { editor } = props;

  const replaceSelection = (newHTML: string) => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        selection.removeText();

        const nodes = convertHtmlToNodes(newHTML, editor);
        selection.insertNodes(nodes);
      }
    });
  };

  return {
    replaceSelection: replaceSelection,
  };
};
