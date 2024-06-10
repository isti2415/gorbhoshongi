import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from "@/components/ui/label"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CornerDownLeft, Mic, Paperclip, Trash } from 'lucide-react'

function Chatbot() {
    return (
        <Card className='w-full flex flex-col justify-between'>
            <CardHeader>
                <div className='flex items-center justify-between'>
                    <CardTitle>GorbhoShongi Chatbot</CardTitle>
                    <Button variant={"outline"} className='hover:bg-red-700'>
                        <Trash className='mr-2' />
                        <div>Delete history</div>
                    </Button>
                </div>
                <CardDescription>A helpful chatbot</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto">
                <ScrollArea>
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form
                    className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring w-full"
                >
                    <Label htmlFor="message" className="sr-only">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                    />
                    <div className="flex items-center p-3 pt-0">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Paperclip className="size-4" />
                                    <span className="sr-only">Attach file</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top">Attach File</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Mic className="size-4" />
                                    <span className="sr-only">Use Microphone</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top">Use Microphone</TooltipContent>
                        </Tooltip>
                        <Button type="submit" size="sm" className="ml-auto gap-1.5">
                            Send Message
                            <CornerDownLeft className="size-3.5" />
                        </Button>
                    </div>
                </form>
            </CardFooter>
        </Card>
    )
}

export default Chatbot