import React, { useState } from 'react';
import { RichTextEditor, RichTextEditorProps } from './RichTextEditor';
import { SbDecorator, SbJumpPageBackground } from '@test-utils/get-storybook-decorator';
import { PageSection, PageSectionRoundedEdges } from '@vanguard/PageSection';

const initialValue = `<h1><span>Welcome to the playground</span></h1>
<blockquote><span>In case you were wondering what the black box at the bottom is &ndash; it's the debug view, showing the current state of the editor. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting.</span></blockquote>
<p><span>The playground is a demo environment built with </span><code><span>@lexical/react</span></code><span>. Try typing in </span><strong><strong>some text</strong></strong><span> with </span><em><em>different</em></em><span> formats.</span></p>
<p><span>Make sure to check out the various plugins in the toolbar. You can also use </span><span>#hashtags</span><span> or @-mentions too!</span></p>
<p><span>If you'd like to find out more about Lexical, you can:</span></p>
<ul><li><span>Visit the </span><a href=https://lexical.dev/ ><span>Lexical website</span></a><span> for documentation and more information.</span></li>
<li><span>Check out the code on our </span><a href=https://github.com/facebook/lexical><span>GitHub repository</span></a><span>.</span></li>
<li><span>Playground code can be found </span><a href=https://github.com/facebook/lexical/tree/main/packages/lexical-playground><span>here</span></a><span>.</span></li>
<li><span>Join our </span><a href=https://discord.com/invite/KmG4wQnnD9><span>Discord Server</span></a><span> and chat with the team.</span></li></ul>
<p><span>Lastly, we're constantly adding cool new features to this playground. So make sure you check back here when you next get a chance </span><span>🙂</span><span>.</span></p>`;

export default SbDecorator({
  title: 'Vanguard/RichTextEditor',
  component: RichTextEditor,
  extra: {
    argTypes: {
      placeholder: {
        defaultValue: 'Enter text',
      },
      defaultValue: {
        defaultValue: initialValue,
      },
    },
  },
});

export const RichTextEditorStory = (props: RichTextEditorProps) => {
  const [content, setContent] = useState(props.defaultValue);

  return (
    <SbJumpPageBackground>
      <PageSection roundedEdges={PageSectionRoundedEdges.both} title={'Rich Text Editor'}>
        <RichTextEditor
          defaultValue={content}
          onChange={setContent}
          placeholder={props.placeholder}
          useAiAssistant={true}
        />

        <div style={{ height: '350px', overflow: 'scroll' }}>
          <h3>HTML:</h3>
          <div>{content}</div>

          {/* <h3>Output:</h3>
          <div dangerouslySetInnerHTML={{ __html: content ?? "" }} /> */}
        </div>
      </PageSection>
    </SbJumpPageBackground>
  );
};
